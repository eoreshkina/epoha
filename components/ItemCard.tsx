import {JSX} from 'react';
import {ChevronRight} from "lucide-react";


function ItemCard({image, title}: { image: JSX.Element; title: string }) {
    return (
        <div className="relative group cursor-pointer">
            {image}
            <div className="absolute top-5 left-5 flex items-center text-white text-xl font-bold">
                <ChevronRight/>
                <span className="px-4 text-center">{title}</span>
            </div>
        </div>
    );
}

export default ItemCard;