import axios from 'axios';
import {
  delayedFailure, delayedSuccess, authorizedApi, endpoint,
} from './api';

export const fetchOffers = (from, to, outboundDate, returnDate) => {
  return axios.post(`${endpoint}/flights/offer`,
    {
      origin: from,
      destination: to,
      outboundDate,
      returnDate,
      cabin: 'M',
      passengers: [
        { type: 'ADT' },
      ],
    }).then(r => r.data);
};

export const purchaseOffer = (offer) => {
  return axios.post(`${endpoint}/flights/purchase`,
    {
      responseId: offer.responseId,
      offerItemId: offer.cheapestOutbound.item.itemId,
      price: offer.cheapestOutbound.item.price.total.value,
      displayPrice: parseInt(offer.cheapestOutbound.item.price.total.value, 0) +  parseInt(offer.cheapestReturn.item.price.total.value, 0),
      passengers: [{firstName: 'Marton', lastName: 'Elodi', email: 'marton.elodi@mysure.co', type: 'ADT'}]
    }).then(r => r.data);
}

export const recommendCancellation = (responseId, price) => {
  return axios.post(`${endpoint}/insurance/cancellation/recommend`,
    {
      responseId: responseId,
      price: price
    }).then(r => r.data);
};

export const activateCancellation = (responseId) => {
  return axios.post(`${endpoint}/insurance/cancellation/activate`,
    {
      responseId: responseId,
    }).then(r => r.data);
};

export const activateTravel = (orderId) => {
  return axios.post(`${endpoint}/insurance/travel/activate`,
    {
      orderId: orderId,
    }).then(r => r.data);
};

export const travelCheckin = () => {
  return axios.post(`${endpoint}/insurance/travel/checkin`,
    {
    }).then(r => r.data);
};

export const travelChancel = () => {
  return axios.post(`${endpoint}/insurance/travel/cancel`,
    {
    }).then(r => r.data);
};

export const recommendTravel = (orderId) => {
  console.log('orderis', orderId)
  return axios.post(`${endpoint}/insurance/travel/recommend`,
    {
      orderId
    }).then(r => r.data);
};
