import PlantRegister from './image/plantregister.webp'
import './Email.scss'
type Props = {}

const Email = (props: Props) => {
    return (
        <div className="register">
            <img src={PlantRegister} alt="image" />
            <h6 className="vestibulum">VESTIBULUM</h6>
            <p>
                Subscribe to our newsletter
                <br />
                and grab <span>30% OFF!</span>
            </p>
            <div>
                <input type="email" placeholder="Your e-mail" />
                <a href="#" className="scarlet-button">
                    Sigh Up
                </a>
            </div>
        </div>
    )
}

export default Email
