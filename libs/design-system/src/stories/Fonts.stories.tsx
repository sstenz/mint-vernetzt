import { Meta, Story } from "@storybook/react";

const text =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n,./:()!?#@&0123456789";

export const Families: Story = () => {
  return (
    <div className="flex flex-wrap items-baseline text-primary text-base">
      <div className="w-1/6 font-bold">sans</div>
      <div className="w-5/6 font-sans">Source Sans Pro 400</div>
      <div className="w-1/6 font-bold">sans italic</div>
      <div className="w-5/6 font-sans italic">Source Sans Pro 400</div>
      <div className="w-1/6 font-bold">sans bold</div>
      <div className="w-5/6 font-sans font-bold">Source Sans Pro 600</div>
      <div className="w-1/6 font-bold">sans bold italic</div>
      <div className="w-5/6 font-sans font-bold italic">
        Source Sans Pro 600
      </div>
    </div>
  );
};

export const Sizes: Story = () => {
  return (
    <div className="flex flex-wrap items-baseline text-primary">
      <div className="w-1/6 text-xs font-bold">xs – 0.75rem</div>
      <div className="w-5/6 text-xs truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">sm – 0.875rem</div>
      <div className="w-5/6 text-sm truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">base – 1rem</div>
      <div className="w-5/6 text-base truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">lg – 1.125rem</div>
      <div className="w-5/6 text-lg truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">xl – 1.1875rem</div>
      <div className="w-5/6 text-xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">2xl – 1.25rem</div>
      <div className="w-5/6 text-2xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">3xl – 2rem</div>
      <div className="w-5/6 text-3xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">4xl – 2.5rem</div>
      <div className="w-5/6 text-4xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">5xl – 4rem</div>
      <div className="w-5/6 text-5xl truncate">{text}</div>
      <hr className="w-full border-blue" />
      <div className="w-1/6 text-xs font-bold">6xl – 6rem</div>
      <div className="w-5/6 text-6xl truncate">{text}</div>
    </div>
  );
};

export const SizesAndColors: Story = () => {
  return (
    <div className="grid gap-y-2">
      <div className="flex flex-wrap items-baseline text-primary">
        <div className="w-1/6 p-2">color</div>
        <div className="w-5/6 p-2">
          <p>colors with min. size</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-tertiary">
        <div className="w-1/6 p-2 text-primary">tertiary</div>
        <div className="w-5/6 p-2">
          <p className="text-primary text-xs">primary xs</p>
          <p className="text-secondary-500 text-xl">secondary-500 xl</p>
          <p className="text-secondary-500 text-lg font-bold">
            secondary-500 lg bold
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-primary">
        <div className="w-1/6 p-2 text-tertiary">primary</div>
        <div className="w-5/6 p-2">
          <p className="text-tertiary text-xs">tertiary xs</p>
          <p className="text-secondary-300 text-xl">secondary-300 xl</p>
          <p className="text-secondary-300 text-lg font-bold">
            secondary-300 lg bold
          </p>
          <p className="text-success text-xl">success xl</p>
          <p className="text-success text-lg font-bold">success lg bold</p>
          <p className="text-warning text-xs">warning xs</p>
          <p className="text-danger text-xl">danger xl</p>
          <p className="text-danger text-lg font-bold">danger lg bold</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-secondary-300">
        <div className="w-1/6 p-2 text-primary">secondary-300</div>
        <div className="w-5/6 p-2">
          <p className="text-primary text-xs">blue xs</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-success-300">
        <div className="w-1/6 p-2 text-primary">success-300</div>
        <div className="w-5/6 p-2">
          <p className="text-primary text-xs">primary xs</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-warning">
        <div className="w-1/6 p-2 text-primary">warning</div>
        <div className="w-5/6 p-2">
          <p className="text-primary text-xs">primary xs</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-danger-300">
        <div className="w-1/6 p-2 text-primary">danger-300</div>
        <div className="w-5/6 p-2">
          <p className="text-primary text-xs">primary xs</p>
        </div>
      </div>
    </div>
  );
};

SizesAndColors.storyName = "allowed sizes and colors";

export const Combinations: Story = () => {
  return (
    <div className="grid gap-y-2">
      <div className="flex flex-wrap items-baseline bg-primary-500 text-neutral-200">
        <div className="w-2/6 p-2">button primary enabled</div>
        <div className="w-4/6 p-2">
          <p>bg-primary-500, text-neutral-200</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-primary-400 text-neutral-200">
        <div className="w-2/6 p-2">button primary hover</div>
        <div className="w-4/6 p-2">
          <p>bg-primary-400, text-neutral-200</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-primary-300 text-neutral-200">
        <div className="w-2/6 p-2">button primary pressed</div>
        <div className="w-4/6 p-2">
          <p>bg-primary-300, text-neutral-200</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-neutral-400 text-neutral-600">
        <div className="w-2/6 p-2">button primary disabled</div>
        <div className="w-4/6 p-2">
          <p>bg-neutral-400, text-neutral-600</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-none text-primary-500">
        <div className="w-2/6 p-2">button secondary enabled</div>
        <div className="w-4/6 p-2">
          <p>bg-none, text-primary-500</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-primary-100 text-primary-500">
        <div className="w-2/6 p-2">button secondary hover</div>
        <div className="w-4/6 p-2">
          <p>bg-primary-100, text-primary-500</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-primary-200 text-primary-500">
        <div className="w-2/6 p-2">button secondary pressed</div>
        <div className="w-4/6 p-2">
          <p>bg-primary-200, text-primary-500</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-none text-neutral-600">
        <div className="w-2/6 p-2">button secondary disabled</div>
        <div className="w-4/6 p-2">
          <p>bg-none, text-neutral-600</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-secondary-300 text-neutral-800">
        <div className="w-2/6 p-2">label</div>
        <div className="w-4/6 p-2">
          <p>bg-secondary-300, text-neutral-800</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-secondary-400 text-neutral-800">
        <div className="w-2/6 p-2">label hover</div>
        <div className="w-4/6 p-2">
          <p>bg-secondary-400, text-neutral-800</p>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline bg-secondary-500 text-neutral-900">
        <div className="w-2/6 p-2">label pressed</div>
        <div className="w-4/6 p-2">
          <p>bg-secondary-500, text-neutral-900</p>
        </div>
      </div>
    </div>
  );
};

Combinations.storyName = "used combinations";

export default {
  title: "Style Guide/Fonts",
  parameters: {
    controls: { disable: true },
    actions: {
      disable: true,
    },
  },
} as Meta;
