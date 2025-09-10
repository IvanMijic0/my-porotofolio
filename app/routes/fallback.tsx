const Fallback = () => {
	return (
		<div className="flex min-h-screen items-center justify-center text-center">
			<div>
				<h1 className="text-2xl font-bold">Page not found</h1>
				<p className="mt-2 text-gray-500">
					Sorry, the page you’re looking for doesn’t exist.
				</p>
				<a
					href="/"
					className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
				>
					Go back home
				</a>
			</div>
		</div>
	);
}

export default Fallback;
