import Image from "next/image";
function Head() {
    return (
        <div className="head">
            <div className="cate"><Image src="/search.png" alt="Home Image" width={30}  height={45} /></div>
            <div className="cate">
                <Image src="/imagesmode.png" alt="Home Image" width={30}  height={45} />
                <h1>Bonjour</h1>
            </div>
            <div className="cate">
                <Image src="/article.png" alt="Home Image" width={30}  height={45} />
                <Image src="/shopping_cart.png" alt="Home Image" width={30}  height={45} />
                <Image src="/person.png" alt="Home Image" width={30}  height={45} />
            </div>
        </div>
    );
}

export default Head;