import "./styles.css"

const Container = ({ children }: any ) => {
    return (
        <div className="container">
            {children}
        </div>
    )    
}

export { Container };