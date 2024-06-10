import type { NextPage } from "next";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => (
	<header className="fixed inset-x-0 top-0 z-50">
		<nav
			className="flex items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div className="flex lg:flex-1">
				<a href="/" className="-m-1.5 p-1.5">
					<span className="sr-only">Your Company</span>
					<img
						className="h-8 w-auto"
						src="/monea-logo-base-white.png"
						alt=""
					/>
				</a>
			</div>
			{/*}
			<div className="hidden lg:flex lg:gap-x-12">
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						{item.name}
					</a>
				))}
			</div>
			<div className="hidden lg:flex lg:flex-1 lg:justify-end">
				<a
					href="#"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					Log in <span aria-hidden="true">&rarr;</span>
				</a>
			</div> 
			*/}
			<div className="hidden lg:flex lg:flex-1 lg:justify-end text-white">
				<a href="#" className="btn btn-circle btn-ghost btn-lg">
					<FaXTwitter className="w-[1em] h-[1em]" />
				</a>
			</div>
		</nav>
	</header>
);

const Hero = () => (
	<main className="relative isolate px-6 pt-14 lg:px-8 min-h-screen w-screen overflow-hidden">
		<div
			className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 h-full"
			aria-hidden="true"
		>
			<div
				className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style={{
					clipPath:
						"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
				}}
			/>
		</div>
		<div
			className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style={{
					clipPath:
						"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
				}}
			/>
		</div>

		<section className="mx-auto max-w-2xl py-24 sm:py-36 lg:py-48">
			<div className="text-center flex flex-col gap-8 justify-center items-center">
				<h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-slate-50">
					Power up your rollup development
				</h1>
				<h2 className="text-xl font-bold sm:text-2xl text-slate-100">
					Effortless. Modular. Unopinionated.
				</h2>
				<p className="text-lg leading-8 max-w-[50ch] text-slate-200 mt-[4em]">
					Introducing a revolutionary engine that simplifies rollup
					configurations. Ideal for local testing, with future cloud
					deployment capabilities. Embrace based sequencing and
					preconfirmations for seamless rollup implementation and
					cloud transitions.
				</p>
			</div>
		</section>
	</main>
);

const HomePage: NextPage = () => (
	<div className="">
		<Header />
		<Hero />
	</div>
);

export default HomePage;
