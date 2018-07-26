// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { InputCheckbox } from './InputCheckbox/input-checkbox.component';
import { InputDateRange } from './InputDateRange/input-date-range.component';
import { InputDateTimeRange } from './InputDateTimeRange/input-date-time-range.component';
import { InputDollarRange } from './InputDollarRange/input-dollar-range.component';
import { InputDropdown } from './InputDropdown/input-dropdown.component';
import { InputIntegerRange } from './InputIntegerRange/input-integer-range.component';
import { InputMultiSelectDropdown } from './InputMultiSelectDropdown/input-multi-select-dropdown.component';
import { InputYearRange } from './InputYearRange/input-year-range.component';

const stories = storiesOf('Inputs', module);

const notesCheckBox = `
Checkbox Input allows you to render single or multiple checkboxes based on the data input.

@name
string: Full name of the component.

@row
boolean: This is a required prop and specifies whether the component will be rendered in row or not.

@isDisabled
boolean: This is a optional parameter, specifies if the component rendered should be clickable or not.

@dataCollection
any[]: This is a required prop, An array of data to be rendered on component.

@onChangeSelection
()=>void: This is a optional parameter, calls the function invoked when the component is clicked.

@value
string: Value to be displayed on the component.

@isChecked
boolean: This is a optional prop, specifies if the checkbox component rendered should be checked/selected by default or not.
`;

const notesDateRange = `
DateRange Input renders date picker component.

@id
string: unique ID for the component.

@value
string: Value to be displayed on the component.

@label
string: Specifies the label for the component.

@isDisabled
boolean: Used to specifiy if the component rendered should be clickable or not.

@fullWidth
boolean: Specifies whether to render the component with full width or not.

@onChangeSelection
()=>void: the function invoked when the checkbox is clicked.

@placeholder
string: placeholder for the component.
`;

const notesDateTimeRange = `
DateTimeRange Input renders date and time picker component.

@id
string: unique ID for the component.

@value
string: Value to be displayed on the component.

@label
string: Specifies the label for the component.

@isDisabled
boolean: Used to specifiy if the component rendered should be clickable or not.

@fullWidth
boolean: Specifies whether to render the component with full width or not.

@onChangeSelection
()=>void: the function to invoke when the component is clicked.

@placeholder
string: placeholder for the component.
`;

const notesDollarRange = `
Dollar range Input renders component for currency.

@id
string: unique ID for the component.

@value
string: Value to be displayed on the component.

@label
string: Specifies the label for the component.

@isDisabled
boolean: Used to specifiy if the component rendered should be clickable or not.

@fullWidth
boolean: Specifies whether to render the component with full width or not.

@onChangeSelection
()=>void: the function to invoke when the component is clicked.

@placeholder
string: placeholder for the component.

@currencySymbol
string: currency symbol to be rendered. (eg.$)

@currencySymbolPosition
string: Specifies the position ofthe symbol on the component.Possible values would be 'start' or 'end'.

`;

const notesDropdown = `
Dropdown  Input renders dropdown component.

@id
string: unique ID for the component.

@value
string: Value to be displayed on the component.

@label
string: Specifies the label for the component.

@isDisabled
boolean: Used to specifiy if the component rendered should be clickable or not.

@fullWidth
boolean: Specifies whether to render the component with full width or not.

@onChangeSelection
()=>void: the function to invoke when the component is clicked.

@isNative
boolean: Specifies if the component to be displayed as native style or not.

@dataCollection
any[]: This is a required prop, An array of data to be rendered on component.

`;

const notesIntegerRange = `
Integer range Input renders input field that accepts only integer values.

@id
string: unique ID for the component.

@value
string: Value to be displayed on the component.

@label
string: Specifies the label for the component.

@isDisabled
boolean: Used to specifiy if the component rendered should be clickable or not.

@fullWidth
boolean: Specifies whether to render the component with full width or not.

@onChangeSelection
()=>void: the function to invoke when the component is clicked.

@placeholder
string: placeholder for the component.
`;

const notesMultiSelectDropdown = `
MultiSelectDropdown Input renders dropdown component which allows multiple selection of options.

@id
string: unique ID for the component.

@value
string: Value to be displayed on the component.

@label
string: Specifies the label for the component.

@isDisabled
boolean: Used to specifiy if the component rendered should be clickable or not.

@fullWidth
boolean: Specifies whether to render the component with full width or not.

@onChangeSelection
()=>void: the function to invoke when the component is clicked.

@isNative
boolean: Specifies if the component to be displayed as native style or not.

@dataCollection
any[]: This is a required prop, An array of data to be rendered on component.
`;

const notesYearRange = `
YearRange Input renders dropdown for year selection.

@id
string: unique ID for the component.

@value
string: Value to be displayed on the component.

@label
string: Specifies the label for the component.

@isDisabled
boolean: Used to specifiy if the component rendered should be clickable or not.

@fullWidth
boolean: Specifies whether to render the component with full width or not.

@onChangeSelection
()=>void: the function to invoke when the component is clicked.

@isNative
boolean: Specifies if the component to be displayed as native style or not.

@dataCollection
any[]: This is a required prop, An array of data to be rendered on component.

@inRow
boolean: Specifies if component should be rendered in row or not.

@maximumLengthOfYear
number: Length upto which years to be generated.

@isDataAvailable
boolean: Checks if a data to be render in side the component is available or not.

`;

const checkboxData = [
  { key: 'Used', doc_count: 17 },
  { key: 'New', doc_count: 3 },
  { key: 'CPO', doc_count: 9 },
];

const dropdownData = [
  { key: 'BMW', doc_count: 5 },
  { key: 'Mercedes', doc_count: 2 },
  { key: 'Audi', doc_count: 8 },
];

const yearData = [
  { key: '2018', doc_count: 15 },
  { key: '2017', doc_count: 7 },
  { key: '2016', doc_count: 23 },
];

stories.add(
  'InputCheckbox',
  withNotes(notesCheckBox)(() => (
    <InputCheckbox row={false} Name="abc" x dataCollection={checkboxData} />
  ))
);

stories.add(
  'InputDateRange',
  withNotes(notesDateRange)(() => <InputDateRange />)
);

stories.add(
  'InputDateTimeRange',
  withNotes(notesDateTimeRange)(() => <InputDateTimeRange />)
);

stories.add(
  'InputDollarRange',
  withNotes(notesDollarRange)(() => <InputDollarRange currencySymbol="$" />)
);

stories.add(
  'InputDropdown',
  withNotes(notesDropdown)(() => (
    <InputDropdown dataCollection={dropdownData} isNative />
  ))
);

stories.add(
  'InputIntegerRange',
  withNotes(notesIntegerRange)(() => <InputIntegerRange />)
);

stories.add(
  'InputMultiSelectDropdown',
  withNotes(notesMultiSelectDropdown)(() => (
    <InputMultiSelectDropdown dataCollection={dropdownData} />
  ))
);

stories.add(
  'InputYearRange',
  withNotes(notesYearRange)(() => (
    <InputYearRange
      id="Year"
      inRow
      dataCollection={yearData}
      isDataAvailable
      isNative
      maximumLengthOfYear={3}
    />
  ))
);
