import React, {Component} from 'react'
import { Input, Button } from 'antd'
import toastr from 'toastr'
import axios from 'axios'

const url = 'http://localhost:3000/login'

class Login extends Component{

    state = {
        auth:{},
        loading:false
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {auth} = this.setState
        axios.post(url,auth)
        .then(res=>{
            console.log(res)
            toastr.success('Inciando Sesion')
        }).catch(e=>{
            toastr.error('Contraseña o usuario incorrectos')
            this.setState({loading:false})
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {auth} = this.state
        auth[field] = value
        this.setState({auth})
    }

    render(){
        const {auth, loading} = this.state
        return(
            <form onSubmit={this.login} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Login</h2>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    value={auth.email}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    value={auth.password}
                    placeholder="Tu Password" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Login</Button>
            </form>
        )
    }
}

export default Login