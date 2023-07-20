import Header from "@/components/navbar";
import styles from "@/styles/Order.module.css"

export default function Orders({order}){
    return(
        <div>
            <Header/>
            <h1 className="font-bold text-3xl uppercase text-center py-8">Orders</h1>
            <div className={styles.layout}>
                <div className="w-full text-center">
                    <h1 className="text-xl font-bold py-4">To be Packaged</h1>
                    <div className="flex justify-center h-full">
                        <div className={styles.orderLayout}>
                            <h1>Order ID</h1>
                            <h1>Products</h1>
                            <h1>Amount</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center">
                    <h1 className="text-xl font-bold py-4">To be delivered</h1>
                    <div className="flex justify-center h-full">
                        <div className={styles.orderLayout}>
                            <h1>Order ID</h1>
                            <h1>Products</h1>
                            <h1>Amount</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}