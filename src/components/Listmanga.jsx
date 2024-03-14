
const products = [
    {
        id: 1,
        name: 'Jujutsu kaisen',
        href: '#',
        imageSrc: 'https://st.nettruyenee.com/data/comics/226/senryuu-shoujo.jpg',
        imageAlt: "Image",
        UpdatedAt: '3 days ago',
        LastChapter: '4',
    },
    {
        id: 1,
        name: 'Jujutsu kaisen',
        href: '#',
        imageSrc: 'https://st.nettruyenee.com/data/comics/226/senryuu-shoujo.jpg',
        imageAlt: "Image",
        UpdatedAt: '3 days ago',
        LastChapter: '4',
    },
    {
        id: 1,
        name: 'Jujutsu kaisen',
        href: '#',
        imageSrc: 'https://st.nettruyenee.com/data/comics/226/senryuu-shoujo.jpg',
        imageAlt: "Image",
        UpdatedAt: '3 days ago',
        LastChapter: '4',
    },
    {
        id: 1,
        name: 'Jujutsu kaisen',
        href: '#',
        imageSrc: 'https://st.nettruyenee.com/data/comics/226/senryuu-shoujo.jpg',
        imageAlt: "Image",
        UpdatedAt: '3 days ago',
        LastChapter: '4',
    },
    {
        id: 1,
        name: 'Jujutsu kaisen',
        href: '#',
        imageSrc: 'https://st.nettruyenee.com/data/comics/226/senryuu-shoujo.jpg',
        imageAlt: "Image",
        UpdatedAt: '3 days ago',
        LastChapter: '4',
    },
    {
        id: 1,
        name: 'Jujutsu kaisen',
        href: '#',
        imageSrc: 'https://st.nettruyenee.com/data/comics/226/senryuu-shoujo.jpg',
        imageAlt: "Image",
        UpdatedAt: '3 days ago',
        LastChapter: '4',
    },
    {
        id: 1,
        name: 'Jujutsu kaisen',
        href: '#',
        imageSrc: 'https://st.nettruyenee.com/data/comics/226/senryuu-shoujo.jpg',
        imageAlt: "Image",
        UpdatedAt: '3 days ago',
        LastChapter: '4',
    },
    // More products...
]

export default function Listmanga() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lastest Updates</h2>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative w-[10rem]">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 w-full flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700 font-bold">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.UpdatedAt}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">C. {product.LastChapter}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}