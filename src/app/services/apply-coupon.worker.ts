/// <reference lib="webworker" />

function applyCoupon(data: any) {
  let discountValue;
  let isCouponApplied: boolean = true;
  let couponCode;

  if (data.percentValue === 10 && data.earringCount >= 1) {
    discountValue = (data.percentValue / 100) * data.totalPrice;
    data.totalPrice = data.totalPrice - discountValue;
    isCouponApplied = false;
    couponCode = 'EAR00010';
    let returnCouponObject = {
      discountValue: discountValue,
      totalPrice: data.totalPrice,
      isCouponApplied: isCouponApplied,
      couponCode: couponCode,
    };
    return returnCouponObject;
  } else if (data.percentValue === 20 && data.necklaceCount >= 2) {
    discountValue = (data.percentValue / 100) * data.totalPrice;
    data.totalPrice = data.totalPrice - discountValue;
    isCouponApplied = false;
    couponCode = 'NEC00020';
    let returnCouponObject = {
      discountValue: discountValue,
      totalPrice: data.totalPrice,
      isCouponApplied: isCouponApplied,
      couponCode: couponCode,
    };
    return returnCouponObject;
  } else if (data.percentValue === 15 && data.ringsCount >= 1) {
    discountValue = (data.percentValue / 100) * data.totalPrice;
    data.totalPrice = data.totalPrice - discountValue;
    isCouponApplied = false;
    couponCode = 'RIN00015';
    let returnCouponObject = {
      discountValue: discountValue,
      totalPrice: data.totalPrice,
      isCouponApplied: isCouponApplied,
      couponCode: couponCode,
    };
    return returnCouponObject;
  } else if (data.percentValue === 25 && data.braceletCount >= 2) {
    discountValue = (data.percentValue / 100) * data.totalPrice;
    data.totalPrice = data.totalPrice - discountValue;
    isCouponApplied = false;
    couponCode = 'BRC00025';
    let returnCouponObject = {
      discountValue: discountValue,
      totalPrice: data.totalPrice,
      isCouponApplied: isCouponApplied,
      couponCode: couponCode,
    };
    return returnCouponObject;
  } else {
    return false;
  }
}

addEventListener('message', ({ data }) => {
  const response = applyCoupon(data);
  postMessage(response);
});
