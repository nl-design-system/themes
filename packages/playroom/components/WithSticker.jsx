/* eslint react/prop-types: 0 */
import React from 'react';

import {
  Alert as UtrechtAlert,
  AlertDialog as UtrechtAlertDialog,
  Article as UtrechtArticle,
  Backdrop as UtrechtBackdrop,
  Button as UtrechtButton,
  ButtonGroup as UtrechtButtonGroup,
  ButtonLink as UtrechtButtonLink,
  Calendar as UtrechtCalendar,
  Checkbox as UtrechtCheckbox,
  CustomRadioButton as UtrechtCustomRadioButton,
  DataList as UtrechtDataList,
  DataListActions as UtrechtDataListActions,
  DataListItem as UtrechtDataListItem,
  DataListKey as UtrechtDataListKey,
  DataListValue as UtrechtDataListValue,
  Document as UtrechtDocument,
  Emphasis as UtrechtEmphasis,
  Fieldset as UtrechtFieldset,
  FieldsetLegend as UtrechtFieldsetLegend,
  Figure as UtrechtFigure,
  FigureCaption as UtrechtFigureCaption,
  FormField as UtrechtFormField,
  FormFieldDescription as UtrechtFormFieldDescription,
  FormLabel as UtrechtFormLabel,
  HTMLContent as UtrechtHTMLContent,
  Heading as UtrechtHeading,
  Heading1 as UtrechtHeading1,
  Heading2 as UtrechtHeading2,
  Heading3 as UtrechtHeading3,
  Heading4 as UtrechtHeading4,
  Heading5 as UtrechtHeading5,
  Heading6 as UtrechtHeading6,
  HeadingGroup as UtrechtHeadingGroup,
  Icon as UtrechtIcon,
  Image as UtrechtImage,
  Link as UtrechtLink,
  LinkButton as UtrechtLinkButton,
  LinkSocial as UtrechtLinkSocial,
  NumberValue as UtrechtNumberValue,
  OrderedList as UtrechtOrderedList,
  OrderedListItem as UtrechtOrderedListItem,
  Page as UtrechtPage,
  PageContent as UtrechtPageContent,
  PageFooter as UtrechtPageFooter,
  PageHeader as UtrechtPageHeader,
  Paragraph as UtrechtParagraph,
  PreHeading as UtrechtPreHeading,
  PrimaryActionButton as UtrechtPrimaryActionButton,
  CustomRadioButton as UtrechtRadioButton,
  Select as UtrechtSelect,
  SelectOption as UtrechtSelectOption,
  Separator as UtrechtSeparator,
  SkipLink as UtrechtSkipLink,
  Strong as UtrechtStrong,
  SubtleButton as UtrechtSubtleButton,
  Surface as UtrechtSurface,
  SecondaryActionButton as UtrechtSecondaryActionButton,
  Table as UtrechtTable,
  TableBody as UtrechtTableBody,
  TableCaption as UtrechtTableCaption,
  TableCell as UtrechtTableCell,
  TableFooter as UtrechtTableFooter,
  TableHeader as UtrechtTableHeader,
  TableHeaderCell as UtrechtTableHeaderCell,
  TableRow as UtrechtTableRow,
  Textarea as UtrechtTextarea,
  Textbox as UtrechtTextbox,
  URLValue as UtrechtURLValue,
  UnorderedList as UtrechtUnorderedList,
  UnorderedListItem as UtrechtUnorderedListItem,
} from '@utrecht/component-library-react';

import { Sticker } from './Sticker';
import { ThemedHeader } from '../ThemedHeader';

export const StickerThemedHeader = ({ theme }) => (
  <Sticker>
    <ThemedHeader theme={theme} />
  </Sticker>
);

export const StickerAlert = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['alert', ...components]}>
    <UtrechtAlert {...props}>{children}</UtrechtAlert>
  </Sticker>
);

export const StickerAlertDialog = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['alert-dialog', ...components]}>
    <UtrechtAlertDialog {...props}>{children}</UtrechtAlertDialog>
  </Sticker>
);

export const StickerArticle = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['article', ...components]}>
    <UtrechtArticle {...props}>{children}</UtrechtArticle>
  </Sticker>
);

export const StickerBackdrop = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['backdrop', ...components]}>
    <UtrechtBackdrop {...props}>{children}</UtrechtBackdrop>
  </Sticker>
);

export const StickerButton = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['button', ...components]}>
    <UtrechtButton {...props}>{children}</UtrechtButton>
  </Sticker>
);

export const StickerButtonGroup = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['button-group', ...components]}>
    <UtrechtButtonGroup {...props}>{children}</UtrechtButtonGroup>
  </Sticker>
);

export const StickerButtonLink = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['button-link', ...components]}>
    <UtrechtButtonLink {...props}>{children}</UtrechtButtonLink>
  </Sticker>
);

export const StickerCalendar = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['calendar', ...components]}>
    <UtrechtCalendar {...props}>{children}</UtrechtCalendar>
  </Sticker>
);

export const StickerCheckbox = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['checkbox', ...components]}>
    <UtrechtCheckbox {...props}>{children}</UtrechtCheckbox>
  </Sticker>
);

export const StickerRadioButton = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['radio-button', ...components]}>
    <UtrechtRadioButton {...props}>{children}</UtrechtRadioButton>
  </Sticker>
);

export const StickerDataList = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['data-list', ...components]}>
    <UtrechtDataList {...props}>{children}</UtrechtDataList>
  </Sticker>
);

export const StickerDataListActions = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['data-list-actions', ...components]}>
    <UtrechtDataListActions {...props}>{children}</UtrechtDataListActions>
  </Sticker>
);

export const StickerDataListItem = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['data-list-item', ...components]}>
    <UtrechtDataListItem {...props}>{children}</UtrechtDataListItem>
  </Sticker>
);

export const StickerDataListKey = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['data-list-key', ...components]}>
    <UtrechtDataListKey {...props}>{children}</UtrechtDataListKey>
  </Sticker>
);

export const StickerDataListValue = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['data-list-value', ...components]}>
    <UtrechtDataListValue {...props}>{children}</UtrechtDataListValue>
  </Sticker>
);

export const StickerDocument = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['document', ...components]}>
    <UtrechtDocument {...props}>{children}</UtrechtDocument>
  </Sticker>
);

export const StickerEmphasis = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['emphasis', ...components]}>
    <UtrechtEmphasis {...props}>{children}</UtrechtEmphasis>
  </Sticker>
);

export const StickerFieldset = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['fieldset', ...components]}>
    <UtrechtFieldset {...props}>{children}</UtrechtFieldset>
  </Sticker>
);

export const StickerFieldsetLegend = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['fieldset-legend', ...components]}>
    <UtrechtFieldsetLegend {...props}>{children}</UtrechtFieldsetLegend>
  </Sticker>
);

export const StickerFigure = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['figure', ...components]}>
    <UtrechtFigure {...props}>{children}</UtrechtFigure>
  </Sticker>
);

export const StickerFigureCaption = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['figure-caption', ...components]}>
    <UtrechtFigureCaption {...props}>{children}</UtrechtFigureCaption>
  </Sticker>
);

export const StickerFormField = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['form-field', ...components]}>
    <UtrechtFormField {...props}>{children}</UtrechtFormField>
  </Sticker>
);

export const StickerFormFieldDescription = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['form-field-description', ...components]}>
    <UtrechtFormFieldDescription {...props}>{children}</UtrechtFormFieldDescription>
  </Sticker>
);

export const StickerFormLabel = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['form-label', ...components]}>
    <UtrechtFormLabel {...props}>{children}</UtrechtFormLabel>
  </Sticker>
);

export const StickerHTMLContent = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['html-content', ...components]}>
    <UtrechtHTMLContent {...props}>{children}</UtrechtHTMLContent>
  </Sticker>
);

export const StickerHeading = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading', ...components]}>
    <UtrechtHeading {...props}>{children}</UtrechtHeading>
  </Sticker>
);

export const StickerHeading1 = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading-1', ...components]}>
    <UtrechtHeading1 {...props}>{children}</UtrechtHeading1>
  </Sticker>
);

export const StickerHeading2 = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading-2', ...components]}>
    <UtrechtHeading2 {...props}>{children}</UtrechtHeading2>
  </Sticker>
);

export const StickerHeading3 = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading-3', ...components]}>
    <UtrechtHeading3 {...props}>{children}</UtrechtHeading3>
  </Sticker>
);

export const StickerHeading4 = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading-4', ...components]}>
    <UtrechtHeading4 {...props}>{children}</UtrechtHeading4>
  </Sticker>
);

export const StickerHeading5 = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading-5', ...components]}>
    <UtrechtHeading5 {...props}>{children}</UtrechtHeading5>
  </Sticker>
);

export const StickerHeading6 = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading-6', ...components]}>
    <UtrechtHeading6 {...props}>{children}</UtrechtHeading6>
  </Sticker>
);

export const StickerHeadingGroup = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['heading-group', ...components]}>
    <UtrechtHeadingGroup {...props}>{children}</UtrechtHeadingGroup>
  </Sticker>
);

export const StickerIcon = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['icon', ...components]}>
    <UtrechtIcon {...props}>{children}</UtrechtIcon>
  </Sticker>
);

export const StickerImage = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['image', ...components]}>
    <UtrechtImage {...props}>{children}</UtrechtImage>
  </Sticker>
);

export const StickerLink = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['link', ...components]}>
    <UtrechtLink {...props}>{children}</UtrechtLink>
  </Sticker>
);

export const StickerLinkButton = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['link-button', ...components]}>
    <UtrechtLinkButton {...props}>{children}</UtrechtLinkButton>
  </Sticker>
);

export const StickerLinkSocial = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['link-social', ...components]}>
    <UtrechtLinkSocial {...props}>{children}</UtrechtLinkSocial>
  </Sticker>
);

export const StickerNumberValue = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['number-value', ...components]}>
    <UtrechtNumberValue {...props}>{children}</UtrechtNumberValue>
  </Sticker>
);

export const StickerOrderedList = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['ordered-list', ...components]}>
    <UtrechtOrderedList {...props}>{children}</UtrechtOrderedList>
  </Sticker>
);

export const StickerOrderedListItem = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['ordered-list-item', ...components]}>
    <UtrechtOrderedListItem {...props}>{children}</UtrechtOrderedListItem>
  </Sticker>
);

export const StickerPage = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['page', ...components]}>
    <UtrechtPage {...props}>{children}</UtrechtPage>
  </Sticker>
);

export const StickerPageContent = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['page-content', ...components]}>
    <UtrechtPageContent {...props}>{children}</UtrechtPageContent>
  </Sticker>
);

export const StickerPageFooter = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['page-footer', ...components]}>
    <UtrechtPageFooter {...props}>{children}</UtrechtPageFooter>
  </Sticker>
);

export const StickerPageHeader = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['page-header', ...components]}>
    <UtrechtPageHeader {...props}>{children}</UtrechtPageHeader>
  </Sticker>
);

export const StickerParagraph = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['paragraph', ...components]}>
    <UtrechtParagraph {...props}>{children}</UtrechtParagraph>
  </Sticker>
);

export const StickerPreHeading = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['pre-heading', ...components]}>
    <UtrechtPreHeading {...props}>{children}</UtrechtPreHeading>
  </Sticker>
);

export const StickerPrimaryActionButton = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['primary-action-button', ...components]}>
    <UtrechtPrimaryActionButton {...props}>{children}</UtrechtPrimaryActionButton>
  </Sticker>
);

export const StickerCustomRadioButton = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['radio-button', ...components]}>
    <UtrechtCustomRadioButton {...props}>{children}</UtrechtCustomRadioButton>
  </Sticker>
);

export const StickerSelect = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['select', ...components]}>
    <UtrechtSelect {...props}>{children}</UtrechtSelect>
  </Sticker>
);

export const StickerSelectOption = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['select-option', ...components]}>
    <UtrechtSelectOption {...props}>{children}</UtrechtSelectOption>
  </Sticker>
);

export const StickerSeparator = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['separator', ...components]}>
    <UtrechtSeparator {...props}>{children}</UtrechtSeparator>
  </Sticker>
);

export const StickerSkipLink = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['skip-link', ...components]}>
    <UtrechtSkipLink {...props}>{children}</UtrechtSkipLink>
  </Sticker>
);

export const StickerStrong = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['strong', ...components]}>
    <UtrechtStrong {...props}>{children}</UtrechtStrong>
  </Sticker>
);

export const StickerSubtleButton = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['subtle-button', ...components]}>
    <UtrechtSubtleButton {...props}>{children}</UtrechtSubtleButton>
  </Sticker>
);

export const StickerSurface = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['surface', ...components]}>
    <UtrechtSurface {...props}>{children}</UtrechtSurface>
  </Sticker>
);

export const StickerSecondaryActionButton = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['secondary-action-button', ...components]}>
    <UtrechtSecondaryActionButton {...props}>{children}</UtrechtSecondaryActionButton>
  </Sticker>
);

export const StickerTable = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table', ...components]}>
    <UtrechtTable {...props}>{children}</UtrechtTable>
  </Sticker>
);

export const StickerTableBody = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table-body', ...components]}>
    <UtrechtTableBody {...props}>{children}</UtrechtTableBody>
  </Sticker>
);

export const StickerTableCaption = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table-caption', ...components]}>
    <UtrechtTableCaption {...props}>{children}</UtrechtTableCaption>
  </Sticker>
);

export const StickerTableCell = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table-cell', ...components]}>
    <UtrechtTableCell {...props}>{children}</UtrechtTableCell>
  </Sticker>
);

export const StickerTableFooter = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table-footer', ...components]}>
    <UtrechtTableFooter {...props}>{children}</UtrechtTableFooter>
  </Sticker>
);

export const StickerTableHeader = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table-header', ...components]}>
    <UtrechtTableHeader {...props}>{children}</UtrechtTableHeader>
  </Sticker>
);

export const StickerTableHeaderCell = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table-header-cell', ...components]}>
    <UtrechtTableHeaderCell {...props}>{children}</UtrechtTableHeaderCell>
  </Sticker>
);

export const StickerTableRow = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['table-row', ...components]}>
    <UtrechtTableRow {...props}>{children}</UtrechtTableRow>
  </Sticker>
);

export const StickerTextarea = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['textarea', ...components]}>
    <UtrechtTextarea {...props}>{children}</UtrechtTextarea>
  </Sticker>
);

export const StickerTextbox = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['textbox', ...components]}>
    <UtrechtTextbox {...props}>{children}</UtrechtTextbox>
  </Sticker>
);

export const StickerURLValue = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['url-value', ...components]}>
    <UtrechtURLValue {...props}>{children}</UtrechtURLValue>
  </Sticker>
);

export const StickerUnorderedList = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['unordered-list', ...components]}>
    <UtrechtUnorderedList {...props}>{children}</UtrechtUnorderedList>
  </Sticker>
);

export const StickerUnorderedListItem = ({ children, inline, components = [], ...props }) => (
  <Sticker inline={inline} components={['unordered-list-item', ...components]}>
    <UtrechtUnorderedListItem {...props}>{children}</UtrechtUnorderedListItem>
  </Sticker>
);
