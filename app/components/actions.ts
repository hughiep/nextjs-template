export const placeOrder = async (_preState: any, formData: FormData) => {
  try {
    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: formData.get('type'),
        side: formData.get('side'),
        symbol: formData.get('symbol'),
        quantity: formData.get('quantity'),
        price: formData.get('price'),
      }),
    })

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    return {
      success: true,
    }
  } catch (error) {
    console.log('Error', error)
    return {
      success: false,
      error: error.message,
    }
  }
}
