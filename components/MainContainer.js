import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
	return (
		<>
			<Head>
				<meta keywords={"ulbi tv, next js " + keywords}/>
				<title>Main page</title>
			</Head>
			<div>
				<div className="navbar">
					<A href={'/'} text={"Main page"}/>
					<A href={'/users'} text={"Users"}/>
				</div>
				<div>
					{children}
				</div>
				<style jsx>
					{`
					.navbar {
						background: orange;
						padding: 15px;
					}
					
					.link {
						text-decoration: none;
						color: white;
						font-size: 20px;
						padding: 10px;
					}
					
				`}
				</style>
			</div>
		</>
	);
};

export default MainContainer;
