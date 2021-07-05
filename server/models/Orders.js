import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, requires: true },
        qty: { type: Number, requires: true },
        image: { type: String, requires: true },
        price: { type: Number, requires: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, requires: true },
      city: { type: String, requires: true },
      postalCode: { type: String, requires: true },
      country: { type: String, requires: true },
    },
    paymentMethod: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)
const Order = mongoose.model('Order', orderSchema)

export default Order
