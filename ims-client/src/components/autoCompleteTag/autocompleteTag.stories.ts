import type { Meta, StoryObj } from '@storybook/react';
import AutocompleteTag from './autoCompleteTag';
const meta = {
    title: 'Components/AutocompleteTag',
    component: AutocompleteTag,
    tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export const Default = {
    args: {
        tagOptions:[{id:"a" ,name:"Tag1"}, {id:"b" ,name:"Tag2"}, {id:"c" ,name:"Tag3"}, {id:"d" ,name:"Tag4"}]
    }
  };
export default meta;
type Story = StoryObj<typeof meta>;

 