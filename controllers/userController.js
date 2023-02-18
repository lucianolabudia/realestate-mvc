
const formLogin = (req, res) => {
    res.render('auth/login', {
        page: 'Iniciar Sesion'
    })
}

const formRegister = (req, res) => {
    res.render('auth/register', {
        page: 'Crear Cuenta'
    })
}

const recoveryForm = (req, res) => {
    res.render('auth/recovery', {
        page: 'Recupera tu acceso a Real Estate'
    })
}

export {
    formLogin,
    formRegister,
    recoveryForm
}