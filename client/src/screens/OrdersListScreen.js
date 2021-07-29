import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getAllOrders } from '../actions/orderActions'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  // const orderList = useSelector((state) => state.orderList)
  const ordersList = useSelector((state) => state.ordersList)
  const { loading, error, orders } = ordersList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  console.log(orders)

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default OrderListScreen

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllOrders } from '../actions/orderActions.js'

// const OrdersListScreen = ({ history }) => {
//   const dispatch = useDispatch()

//   const userDetails = useSelector((state) => state.userDetails)
//   const { loading, error, user } = userDetails

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

//   const ordersList = useSelector((state) => state.ordersList)
//   const {
//     loading: ordersLoading,
//     error: ordersError,
//     orders: allOrders,
//   } = ordersList

//   useEffect(() => {
//     if (!userInfo) {
//       history.push('/login')
//     } else {
//       if (!user.name) {
//         dispatch(getAllOrders())
//       }
//     }
//   }, [history, userInfo, user, dispatch])

//   if (allOrders) {
//     console.log('all orders: ', allOrders)
//   }

//   return (
//     <div>
//       {allOrders.map((order) => (
//         <div>{order}</div>
//       ))}
//     </div>
//   )
// }

// export default OrdersListScreen