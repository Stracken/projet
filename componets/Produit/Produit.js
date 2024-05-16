import Image from "next/image"

function Produit() {

    return(
        <div className="produit">
            <div className="description">
                <h1>Pièce de boeuf</h1>
                <div className="roundedblack"/>
                <div className="block">
                    <Image src="/boeuf.jpg" alt="product" width={100} height={45}/>
                    <div className="roundedv"/>
                    <div className="text">
                        <h1>Description</h1>
                        <p>La pièce de bœuf se présente sous la forme d'un épais morceau de viande d'un rouge profond et soutenu.
                        Sa texture ferme et compacte laisse deviner une chair tendre et savoureuse.
                        Des filaments de gras nacré parcourent la chair, promettant une explosion de saveurs fondantes.
                        Une fine couche de gras ambré recouvre la surface, prête à dégouliner de sucs lors de la cuisson.
                        L'arôme puissant et capiteux qui s'en dégage éveille instantanément les papilles gustatives.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produit