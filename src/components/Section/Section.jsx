import { SectionBlock, SectionHeader } from './section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <SectionBlock>
        <SectionHeader>{title}</SectionHeader>
        {children}
      </SectionBlock>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
