/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Redirect from '@atoms/Redirect'
import { Styles } from '@constants'

export default function FlyoutMenu({ data, name, isBreakpointActive }) {
  let timeout // NodeJS.Timeout
  const timeoutDuration = 200

  const buttonRef = React.useRef(null) // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = React.useState(false)

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    // eslint-disable-next-line no-shadow
    setOpenState(() => !open)
    // toggle the menu by clicking on buttonRef
    buttonRef.current.click() // eslint-disable-line
  }

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === 'onMouseEnter') ||
      (open && openState && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  const handleClick = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation()
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <Popover className="mx-3">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, 'onMouseEnter')}
          onMouseLeave={() => onHover(open, 'onMouseLeave')}
        >
          <Popover.Button
            ref={buttonRef}
            className={clsx(
              open ? 'text-gray-900' : 'text-gray-700',
              `group bg-white rounded-md inline-flex items-center text-md font-medium hover:text-gray-900 focus:outline-none px-2 ${Styles.navbarHeight[isBreakpointActive]}`
            )}
            onClick={handleClick}
          >
            <span>{name}</span>
            <MdKeyboardArrowDown
              className={clsx(
                open ? 'text-gray-900' : 'text-gray-500',
                'ml-1 h-5 w-5 group-hover:text-gray-600'
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`bg-white z-10 w-screen absolute ${Styles.flyoutTop[isBreakpointActive]} left-0 right-0 shadow-lg`}
            >
              <div className="w-full ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="w-full relative mx-auto max-w-full md:max-w-screen-lg lg:max-w-screen-xl px-6 xl:px-0">
                  <div className="relative grid gap-6 bg-white pt-7 pb-10 sm:gap-8">
                    <div className="grid grid-cols-2 gap-8 w-3/4">
                      {data.map((group) => {
                        return (
                          <div key={group.groupName}>
                            {group.groupName ? (
                              <div className="uppercase text-xs font-semibold mb-6 text-gray-700">
                                {group.groupName}
                              </div>
                            ) : (
                              <div className="h-11" />
                            )}

                            <div className="grid gap-8">
                              {group.items.map((item) => (
                                <Redirect
                                  key={item.name}
                                  href={item.href}
                                  external={item.external}
                                  onClick={item.onClick}
                                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                >
                                  <div className={`${item.color} p-3 rounded`}>
                                    <item.icon
                                      className="flex-shrink-0 h-7 w-7 text-white"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-800">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm font-normal text-gray-600">
                                      {item.description}
                                    </p>
                                  </div>
                                </Redirect>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}

FlyoutMenu.propTypes = {
  data: PropTypes.arrayOf({
    groupName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string,
      external: PropTypes.bool,
      icon: PropTypes.node.isRequired,
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  isBreakpointActive: PropTypes.bool.isRequired,
}
