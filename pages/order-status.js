import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import ordersData from '../data/orders'

function OrderStatus() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        setOrders(prevOrders => prevOrders = ordersData);
    }, [])
    return (
        <div className="container mt-4 mb-4">
            <Card>
                <Card.Header><h5>Delivered Items</h5></Card.Header>
                <Card.Body>
                    <div className="row">
                        {
                            orders.map(item => {
                                return item.orderStatus === 3 ? (
                                    <div key={item.id} className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src={item.proImg} style={{ width: '100%' }} alt={item.proName} className="img-fuid" />
                                            </div>
                                            <div className="col-md-8">
                                                <span>Arrived on: {item.arrivalDate}</span>
                                                <h5>{item.proName}</h5>
                                                <span>Brand: {item.brand}</span><br />
                                                <span>Quantity: {item.qty}</span><br />
                                                <Link href={`/order-details/${item.id}`}><a className="btn btn-primary btn-sm mt-4 mb-4">View Order Details</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : '';
                            })
                        }

                    </div>

                </Card.Body>
            </Card>

            <Card>
                <Card.Header><h5>Progressed Items</h5></Card.Header>
                <Card.Body>
                    <div className="row">
                        {
                            orders.map(item => {
                                return item.orderStatus === 1 ? (
                                    <div key={item.id} className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src={item.proImg} style={{ width: '100%' }} alt={item.proName} className="img-fuid" />
                                            </div>
                                            <div className="col-md-8"></div>
                                            <div className="col-md-12">
                                                <span>Expected to ship: {item.expectedShipDate}</span>
                                                <h5>{item.proName}</h5>
                                                <span>Brand: {item.brand}</span><br />
                                                <span>Quantity: {item.qty}</span><br />
                                                <Link href={`/order-details/${item.id}`}><a className="btn btn-primary btn-sm mt-4 mb-4">View Order Details</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : '';
                            })
                        }

                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default OrderStatus
