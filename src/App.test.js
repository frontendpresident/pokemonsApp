import { render, screen } from "@testing-library/react"
import App from "./App"

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  };
};

describe('App', () => {
  it('render app', () => {
    render(<App />)
    expect(screen.getByText(/please/i))
  });
})
