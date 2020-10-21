import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ordersData from '../../data/orders'
import Swal from 'sweetalert2'
import date from 'date-and-time';

function OrderDeatils() {
    const router = useRouter();
    const { id } = router.query;
    const [order, setOrder] = useState({})
    const [canceldate, setCanceldate] = useState('')

    useEffect(() => {
        const orderDetails = ordersData.filter(item => item.id == parseInt(id))
        setOrder(prevOrder => prevOrder = orderDetails[0]);
    }, [])
    const handleCancel = id => {
        Swal.fire({
            title: '',
            text: 'Are you sure to cancel this order?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                setOrder({ ...order, orderStatus: 2 })
                const now = new Date();
                setCanceldate(prevCancelDate => prevCancelDate = date.format(now, 'DD-MM-YYYY hh:mm A'))
                Swal.fire(
                    'Cancelled!',
                    'Your order has been cancelled.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="container mt-4 mb-4">
            <Card>
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={order.proImg} style={{ width: '100%' }} alt={order.proName} className="img-fuid" />
                                </div>
                                <div className="col-md-8">
                                    {
                                        order.orderStatus == 3 ? (
                                            <span>Arrived on: {order.arrivalDate}</span>
                                        ) : (
                                                order.orderStatus == 2 ? (
                                                    <>
                                                        <span className="text-danger">Order has cancelled on: {canceldate}</span>
                                                    </>
                                                ) : (
                                                        <>
                                                            <span>Expected to ship: {order.expectedShipDate}</span>
                                                        </>
                                                    )
                                            )
                                    }

                                    <h5>{order.proName}</h5>
                                    <span>Brand: {order.brand}</span><br />
                                    <span>Quantity: {order.qty}</span><br />
                                    <button className="btn btn-primary btn-sm mt-4 mb-4" onClick={() => router.push('/order-status')}>Go Back</button>
                                    {order.orderStatus == 1 && (<button className="btn btn-danger btn-sm ml-2 mt-4 mb-4" onClick={() => handleCancel(order.id)}>Cancel your order</button>)}
                                </div>
                            </div>
                        </div>

                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default OrderDeatils
