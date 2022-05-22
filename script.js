
const getData = () => {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            console.log('success get', data)
            sendData(data)
        })
        .catch((error) => {
            console.log('error get', JSON.stringify(error))
        })
}


const sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                return response.json()
            } else {
                throw new Error(response)
            }
        })

        .then(data => {
            console.log('success send', data)
        })
        .catch((error) => {
            console.log('error send', JSON.stringify(error))
        })
}
getData()


