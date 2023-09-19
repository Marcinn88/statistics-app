import css from '../AppBar/AppBar.module.css'
export const AppBar = () => {
    return (
        <header className = {css.wrapper}>
            <section className = {css.section}>
                <h1>Statystyki</h1>
            </section>
        </header>
    )
}