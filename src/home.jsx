// TODO: Dont use react to fetch data, leverage a framework (Next.js?) because otherwise the data will be fetched every time the component is rendered in Dev which will be twice...
// Kinda cant believe React doesnt natively handle this
// Or continue as is and then refactor later?

export default function Home(){

    return(
        <div>
            <p>Home</p>
        </div>
    );
}