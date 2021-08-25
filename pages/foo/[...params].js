import {useRouter} from "next/router";

function Foo(props) {
    const router = useRouter();
    console.log({router});
    return (
        <pre>{JSON.stringify(router, null, 4)}</pre>
    )
}

export default Foo;
