import { Alert, Heading, Paragraph } from "@rijkshuisstijl-community/components-react";
import type { Meta, StoryObj } from "@storybook/react-vite";


const meta = {
  id: "rhc-alert",
  title: "Components/Alert/Rijkshuisstijl Community",
  component: Alert,
  parameters: { actions: { disable: true } },
  argTypes: {
    children: {
      description: 'HTML content of the alert',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'ok', 'warning'],
    },
  },
  args: {
    children: (
      <>
        <Heading level={2}>Lorem ipsum</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </>
    ),
  },
} satisfies Meta<typeof Alert>;


type Story = StoryObj<typeof meta>;


export default meta;


// Een story met het voorbeeld thema
export const VoorbeeldTheme: Story = {
  name: "Voorbeeld theme",
  parameters: { theme: "voorbeeld-theme" },
};


// Een story met het thema van de organisatie die de component bijdraagt
export const RijkshuisstijlTheme: Story = {
  name: 'Rijkshuisstijl Community theme',
  parameters: { theme: 'rhc-theme' },
};
