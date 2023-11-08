function ProductsDetail() {
    return (
        <>
        <main>
            <div className="hero bg-base-100 min-h-[78dvh] my-6">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://ik.imagekit.io/aeross/cat.jpg?updatedAt=1699260555605"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className="texts">
                            <h1 className="text-5xl font-bold text-primary-focus">Green Ash</h1>
                            <div className="py-6">
                                <p>
                                    This medication is known to relieve pain and reduce inflammation.
                                </p>
                                <p>Stock: 90</p>
                                <p>Price: 261</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default ProductsDetail;