export default function GenresItem({name}: {name: string}) {
    return (
        <div className="bg-[#1A1A1A] w-[200px] h-[100px] rounded-xl cursor-pointer">
            <h3 className="text-white text-xl">{name}</h3>
        </div>
    )
}
