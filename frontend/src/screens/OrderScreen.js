import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';

const OrderScreen = ({ match }) => {
	const orderId = match.params.id;

	const dispatch = useDispatch();

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, loading, error } = orderCreate;

	useEffect(() => {
		if (!order || order._id !== orderId) {
			dispatch(getOrderDetails(orderId));
		}
	}, [dispatch, order, orderId]);

	const {
		orderItems,
		_id,
		shippingAddress,
		paymentMethod,
		shippingPrice,
		taxPrice,
		totalPrice,
		isPaid,
		paidAt,
		isDelivered,
		deliveredAt,
	} = order;

	let { itemsPrice } = order;

	const { address, city, postalCode, country } = shippingAddress;

	if (!loading) {
		// Calculate prices
		const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

		itemsPrice = addDecimals(
			orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
		);
	}

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<>
			<h1>Order {_id}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong>Address: </strong>
								{address}, {city} {postalCode}, {country}
							</p>
							{isDelivered ? (
								<Message varian='success'>Delivered on {deliveredAt}</Message>
							) : (
								<Message variant='danger'>Not Delivered</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method: </strong>
								{paymentMethod}
							</p>
							{isPaid ? (
								<Message varian='success'>Paid on {paidAt}</Message>
							) : (
								<Message variant='danger'>Not Paid</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Order Items</h2>
							{orderItems.length === 0 ? (
								<Message>Your order is empty</Message>
							) : (
								<ListGroup variant='flush'>
									{orderItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														rounded
													/>
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.qty} x ${item.price} = ${item.qty * item.price}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
									<br />
									<Link to='/'>
										<p>Add More Items</p>
									</Link>
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>${itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>${shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>${totalPrice}</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default OrderScreen;
