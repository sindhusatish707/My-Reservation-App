//for displaying reservation table with soeting, filtering, pagination and row selection

import React, { Component } from "react";
import './Myreservation.css';
import reservations from './ReservationData.json';
import styled from 'styled-components';
import { ColumnFilter } from './filters';
import { useTable, useFilters, useRowSelect, useSortBy, usePagination } from 'react-table';


const Styles = styled.div`
  padding: 1rem;

  table {
    margin-left: 5%;
    border-spacing: 0;
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;

      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
    margin-left:65%;
  }
  .responsive{
    overflow-x: auto;
  }
`
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function Table({ 
  columns,
  data, 
  fetchData,
  loading,
  pageCount: controlledPageCount, }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { selectedRowIds, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, 
      pageCount: controlledPageCount,
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [

        {
          id: 'selection',
         
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
    
    
  )

  React.useEffect(() => {
    fetchData({ pageIndex, pageSize })
  }, [fetchData, pageIndex, pageSize])

  const firstPageRows = rows.slice(0, 3)

  return (
    <>
    <div className='responsive'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  {column.canFilter ? column.render('Filter') : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      </div>
      <br />
      

      <p>Number of Rows selected: {Object.keys(selectedRowIds).length}</p>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        
      </div>
    </>
  )
}

//function selectedRowDetails(){
//  if (Object.keys(selectedRowIds).length > 0){
//    <>
//      <div>
//        <p> Reservation ID: {Object.keys(selectedRowIds).reservationId}
//        <br>
//          From Location: {Object.keys(selectedRowIds).trip.location.from}
//        </br>
//        <br>
//          To Location: {Object.keys(selectedRowIds).trip.location.to}
//        </br>

//        </p>
//      </div>
//    </>
//  }
//  else{
//    <p> No Reservations to show </p>
//  }
//}

function MyresvtBody() {
  const columns = React.useMemo(
    () => [
      
        {
          Header: 'Reservation ID',
          accessor: 'reservationId',
          Filter: ColumnFilter,
          disableFilters: true,
        },
        {
          Header: 'Booking Channel',
          accessor: 'bookingChannel',
          Filter: ColumnFilter,
        },
        {
        Header: 'Trip',
        columns: [
          {
            Header: 'Location',
            disableSortBy: true,
            columns:[
              {
                Header: 'From',
                accessor: 'trip.location.from',
                Filter: ColumnFilter,
              },
              {
                Header:'To',
                accessor:'trip.location.to',
                Filter: ColumnFilter,
              },
            ]
          },
          {
            Header: 'Time',
            disableSortBy: true,
            columns:[
              {
                Header:'Start Time',
                accessor:'trip.time.start',
                Filter: ColumnFilter,
              },
              {
                Header: 'End Time',
                accessor:'trip.time.end',
                Filter: ColumnFilter,
              },
            ]
          }
        ],
      },
    ],
    []
  )

  const serverdata = React.useMemo(() => reservations, [])

  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [pageCount, setPageCount] = React.useState(0)
  const fetchIdRef = React.useRef(0)

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current

    setLoading(true)

    setTimeout(() => {

      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex
        const endRow = startRow + pageSize
        setData(serverdata.slice(startRow, endRow))

        setPageCount(Math.ceil(serverdata.length / pageSize))

        setLoading(false)
      }
    }, 3)
  }, [])
  return (
    <Styles>
      <Table 
      columns={columns}
      data={data}
      fetchData={fetchData}
      loading={loading}
      pageCount={pageCount} />
    </Styles>
  )
}

export default MyresvtBody;


