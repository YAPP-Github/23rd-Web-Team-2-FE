import {
  createContext,
  type HTMLAttributes,
  type PropsWithChildren,
  type RefObject,
  useContext,
} from 'react';
import clsx from 'clsx';

import useClickAway from '@hooks/useClickAway';
import useDisclosure, { type UseDisclosure } from '@hooks/useDisclosure';
import usePosition from '@hooks/usePosition';

import DropdownItem from './components/DropdownItem';
import DropdownList from './components/DropdownList';
import DropdownTitle from './components/DropdownTitle';
import DropdownTrigger from './components/DropdownTrigger';
import * as styles from './style.css';

const INIT_POSITION = { top: 0, left: 0 };

interface DropdownContextProps
  extends Pick<UseDisclosure, 'isOpen' | 'onClose' | 'onToggle'> {
  /** dropdown menulist 크기 */
  size?: 'small' | 'medium';
  /** dropdown menulist 위치 */
  placement?: 'bottom-left' | 'bottom-center' | 'bottom-right';
  /** dropdown menulist {top, left} 위치 */
  position: typeof INIT_POSITION;
  /** dropdown menulist 요소의 ref 객체  */
  targetRef: RefObject<HTMLUListElement>;
}

interface DropdownRootProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<DropdownContextProps, 'size' | 'placement'> {
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export const DropdownContext = createContext<DropdownContextProps | null>(null);

const DropdownRoot = ({
  children,
  size = 'small',
  placement = 'bottom-left',
  ...props
}: PropsWithChildren<DropdownRootProps>) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const dropdownRef = useClickAway({
    onClickAway: onClose,
  })!;
  const { targetRef, position } = usePosition<HTMLDivElement, HTMLUListElement>(
    {
      defaultTriggerRef: dropdownRef,
      isOpen,
      placement,
    },
  );

  return (
    <DropdownContext.Provider
      value={{
        size,
        placement,
        position,
        targetRef,
        isOpen,
        onClose,
        onToggle,
      }}
    >
      <div
        {...props}
        className={clsx(styles.wrapper, props.className)}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const ctx = useContext(DropdownContext);

  if (!ctx) {
    throw new Error(
      'useDropdownContext hook must be used within a Dropdown component',
    );
  }

  return ctx;
};

const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Title: DropdownTitle,
  List: DropdownList,
  Item: DropdownItem,
});

export default Dropdown;
