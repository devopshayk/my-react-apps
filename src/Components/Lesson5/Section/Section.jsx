import './Section.css'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'

const Section = () => {
    return (
       <div>
        <div className="container_gradient">
            <div className="flex_center">
                <div className="big_text">Create user interfaces from components</div>
                <div className="loger_text">React lets you build user interfaces out of individual pieces called components. Create your own React components like <span className="bg"> Thumbnail</span>, <span className="bg">LikeButton</span>, and<span className="bg"> Video</span>. Then combine them into entire screens, pages, and apps.</div>
                <img src={img1} alt="" />
                <div className="big_text2">Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.</div>
            </div>
        </div>
        <div className="container_gradient">
            <div className="flex_center">
                <div className="big_text">Write components with code and markup</div>
                <div className="loger_text">React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array <span className='bg'> map()</span>. Learning React is learning programming.</div>
                <img src={img2} alt="" />
                <div className="big_text2">This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete..</div>
            </div>
        </div>
        <div className="container_gradient">
            <div className="flex_center">
                <div className="big_text">Add interactivity wherever you need it</div>
                <div className="loger_text">React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.</div>
                <img src={img3} alt="" />
                <div className="big_text2">You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.</div>
                <div className="btn_c"><svg class="me-2.5 text-primary dark:text-primary-dark" fill="none" width="24" height="24" viewBox="0 0 72 72" aria-hidden="true"><g clip-path="url(#clip0_8_9064)"><path d="M44.7854 22.1142C45.4008 20.5759 44.6525 18.83 43.1142 18.2146C41.5758 17.5993 39.8299 18.3475 39.2146 19.8859L27.2146 49.8859C26.5992 51.4242 27.3475 53.1702 28.8858 53.7855C30.4242 54.4008 32.1701 53.6526 32.7854 52.1142L44.7854 22.1142Z" fill="currentColor"></path><path d="M9.87868 38.1214C8.70711 36.9498 8.70711 35.0503 9.87868 33.8787L18.8787 24.8787C20.0503 23.7072 21.9497 23.7072 23.1213 24.8787C24.2929 26.0503 24.2929 27.9498 23.1213 29.1214L16.2426 36.0001L23.1213 42.8787C24.2929 44.0503 24.2929 45.9498 23.1213 47.1214C21.9497 48.293 20.0503 48.293 18.8787 47.1214L9.87868 38.1214Z" fill="currentColor"></path><path d="M62.1213 33.8787L53.1213 24.8787C51.9497 23.7072 50.0503 23.7072 48.8787 24.8787C47.7071 26.0503 47.7071 27.9498 48.8787 29.1214L55.7574 36.0001L48.8787 42.8787C47.7071 44.0503 47.7071 45.9498 48.8787 47.1214C50.0503 48.293 51.9497 48.293 53.1213 47.1214L62.1213 38.1214C63.2929 36.9498 63.2929 35.0503 62.1213 33.8787Z" fill="currentColor"></path></g><defs><clipPath id="clip0_8_9064"><rect width="72" height="72" fill="white"></rect></clipPath></defs></svg>Add React to your page<svg class="text-primary dark:text-primary-dark rtl:rotate-180" fill="none" width="24" height="24" viewBox="0 0 72 72" aria-hidden="true"><path class="transition-transform ease-in-out translate-x-[-8px] group-hover:translate-x-[8px]" fill-rule="evenodd" clip-rule="evenodd" d="M40.0001 19.0245C41.0912 17.7776 42.9864 17.6513 44.2334 18.7423L58.9758 33.768C59.6268 34.3377 60.0002 35.1607 60.0002 36.0257C60.0002 36.8908 59.6268 37.7138 58.9758 38.2835L44.2335 53.3078C42.9865 54.3988 41.0913 54.2725 40.0002 53.0256C38.9092 51.7786 39.0355 49.8835 40.2824 48.7924L52.4445 36.0257L40.2823 23.2578C39.0354 22.1667 38.9091 20.2714 40.0001 19.0245Z" fill="currentColor"></path><path class="opacity-0 ease-in-out transition-opacity group-hover:opacity-100" d="M60 36.0273C60 37.6842 58.6569 39.0273 57 39.0273H15C13.3431 39.0273 12 37.6842 12 36.0273C12 34.3704 13.3431 33.0273 15 33.0273H57C58.6569 33.0273 60 34.3704 60 36.0273Z" fill="currentColor"></path></svg></div>
            </div>
        </div>
        </div> 
    )
}
export default Section;