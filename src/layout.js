/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Column = ({ sx, children }) => (
  <div
    sx={{
      minWidth: '60%',
      minHeight: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      ...sx
    }}
  >
    {children}
  </div>
);

export const Row = ({ noAlign, sx, children }) => (
  <div
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 3,
      '> * ~ *': {
        marginLeft: "50px"
      },
      '> *': noAlign ? {
        width: '50%'
      } : null,
      '> *:last-child': !noAlign ? {
        textAlign: 'right',
        maxWidth: '50%'
      } : null,
      ...sx
    }}
  >
    {children}
  </div>
);

export const IconAuthor = () => (
  <p style={{fontSize: "4px"}}>
    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
</p>
);

export const OneLine = ({children}) => (
  <div style={{
    display: 'flex',
    alignContent: 'center',
    width: '120%'
  }}>
    {children}
  </div>
);
