import { h, Fragment } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import './Counter.css';

const LazyMessage = lazy(() => import('./Message'));
const LazyNumberValue = lazy(() => import('./NumberValue'));
const Fallback = () => <p>i'm loader, which nobody should see</p>;

export default function Counter({ children, count }) {
	const add = () => count.value++;
	const subtract = () => count.value--;

	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<Suspense fallback={Fallback}>
					<LazyNumberValue>{count}</LazyNumberValue>
				</Suspense>
				<button onClick={add}>+</button>
			</div>
			<Suspense fallback={Fallback}>
				<LazyMessage>{children}</LazyMessage>
			</Suspense>
		</>
	);
}
