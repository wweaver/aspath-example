import {useRouter} from "next/router";

function Foo(props) {
    const router = useRouter();
    return (
        <pre>{JSON.stringify({router, props}, null, 4)}</pre>
    )
}

Foo.getInitialProps = ({asPath}) => {
    return {asPath};
}

export default Foo;
