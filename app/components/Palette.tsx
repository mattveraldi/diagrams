import { Form } from "@remix-run/react";
import Tippy from "@tippyjs/react";
import { FormEventHandler } from "react";
import useStore from "~/hooks/useStore";
import { paletteItems } from "./paletteItems";

export function Palette() {
  const store = useStore();
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    store.addNode({
      id: (store.nodes.length + 1).toString(),
      type: event.currentTarget["name"],
      data: {},
      position: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      },
    });
  };

  return (
    <div className="flex absolute bottom-4 right-1/2 translate-x-1/2 bg-inherit z-10 gap-4">
      {paletteItems.map((item) => (
        <Form
          onSubmit={onSubmit}
          method="post"
          name={item.name}
          key={item.name}
        >
          <Tippy content={item.description}>
            <button type="submit" aria-label={item.description}>
              {item.svg}
            </button>
          </Tippy>
        </Form>
      ))}
    </div>
  );
}
