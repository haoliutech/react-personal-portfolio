export default function Navbar(){
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl">&lt;Hao Liu&gt;</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a className="text-xl">Link</a></li>
                <li>
                    <details>
                    <summary className="text-xl">
                        Parent
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
                <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://media.licdn.com/dms/image/C5603AQHjKxzh3Hw3NQ/profile-displayphoto-shrink_800_800/0/1659620329236?e=1721865600&v=beta&t=vH-swWRyf-WiTRzBub0hZ_n4Fj7jY4BALUd03TgSk6w" />
                </div>
                </div>
            </div>
            </div>
    )
}