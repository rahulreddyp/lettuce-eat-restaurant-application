const content = {
    inputs: [
        {
            label:'First Name',
            name: 'firstName',
            type: 'text',
            default:JSON.parse(localStorage.getItem('user')).firstName
        },
        {
            label:'Last Name',
            name: 'lastName',
            type: 'text',
            default:JSON.parse(localStorage.getItem('user')).lastName
        },
        {
            label:'Email',
            name: 'email',
            type: 'text',
            default:JSON.parse(localStorage.getItem('user')).email
        },
        {
            label:'Address',
            name: 'address',
            type: 'text',
            default:JSON.parse(localStorage.getItem('user')).address
        }
    ]
};

export default content;