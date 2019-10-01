export class DontOverReactDOM {
	static render(container, component) {
		if (!container) {
			console.error('No container element supplied. Aborting...');
			return;
		}

		component = componentFactory(component);
		if (!component) {
			console.warn('No component supplied. Aborting...');
			return;
		}

		component.container = container;
		component.render(container);
	}
}

function componentFactory(source) {
	if (!source) {
		return null;
	}
	let component = source;
	if (typeof component === 'function') {
		const CustomComponent = component;
		if (typeof CustomComponent.prototype.render === 'function') {
			component = new CustomComponent();
		} else {
			component = new Component();
			component.render = source;
		}
	}
	if (typeof component === 'object') {
		if (typeof component.render === 'function') {
			return component;
		}
	}
	return null;
}

export class Component {
	constructor() {}
	render(container) {}
	setState(state) {
		this.state = state;
		this.render(this.container);
	}
}

export default { Component, DontOverReactDOM };

