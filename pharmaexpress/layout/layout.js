import Styles from '../styles/Layout.module.css';

export default function Layout({ children }){
    return(
        <div className="flex h-screen">
            <div className="m-auto bg-blue-900 rounded-lg w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className="left flex flex-col rounded-lg justify-evenly bg-blue-600">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
                <div className={Styles.imgStyle}>
                    <img src="https://cdn.discordapp.com/attachments/1108976165772853358/1122572194258628689/2.png"></img>
                </div>
            </div>
        </div>
    )
}