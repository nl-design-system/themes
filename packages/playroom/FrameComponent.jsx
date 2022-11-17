import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ThemedHeader } from './ThemedHeader';
import { UtrechtPage } from './components';

import '@utrecht/component-library-css/dist/index.css';
import '@nl-rvo/assets/fonts/index.css';
import '@gemeente-denhaag/components-css/dist/index.css';
import './index.css';

export default function FrameComponent({ theme, children }) {
  if (theme.className.includes('amsterdam') || theme.className.includes('rvo')) {
    require('@nl-rvo/component-library-css');
  }

  return (
    <div className={clsx(theme.className, 'utrecht-document', 'utrecht-document--surface')}>
      <style>{`@font-face {
  font-family: "RijksoverheidSansWebText";
  font-style: normal;
  font-weight: 400;
  src: url(http://localhost:6012/bc0baa7aed67b8ebeae3.woff) format("woff");
}

@font-face {
  font-family: "RijksoverheidSansWebText";
  font-style: italic;
  font-weight: 400;
  src: url(http://localhost:6012/ec92ff9f330de12bb79c.woff) format("woff");
}

@font-face {
  font-family: "RijksoverheidSansWebText";
  font-style: normal;
  font-weight: 700;
  src: url(http://localhost:6012/d5b8c3d3fc053bf462b4.woff) format("woff");
}

@font-face {
  font-family: "RijksoverheidSerifWeb";
  font-style: normal;
  font-weight: 400;
  src: url(http://localhost:6012/2059cfb95ccaff121a8c.woff) format("woff");
}

@font-face {
  font-family: "RijksoverheidSerifWeb";
  font-style: italic;
  font-weight: 400;
  src: url(http://localhost:6012/dc1d33381cdeae927d19.woff) format("woff");
}

@font-face {
  font-family: "RijksoverheidSerifWeb";
  font-style: normal;
  font-weight: 700;
  src: url(http://localhost:6012/244e29e6ceb60f95a719.woff) format("woff");
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmwtcnZvL2Fzc2V0cy9mb250cy9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyREFBZ0Q7QUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlqa3NvdmVyaGVpZFNhbnNXZWJUZXh0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL1JPc2Fuc3dlYnRleHRyZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpamtzb3ZlcmhlaWRTYW5zV2ViVGV4dFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiLi9ST3NhbnN3ZWJ0ZXh0aXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpamtzb3ZlcmhlaWRTYW5zV2ViVGV4dFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKFwiLi9ST3NhbnN3ZWJ0ZXh0Ym9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSaWprc292ZXJoZWlkU2VyaWZXZWJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcIi4vUk9zZXJpZndlYnJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlqa3NvdmVyaGVpZFNlcmlmV2ViXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCIuL1JPc2VyaWZ3ZWJpdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmlqa3NvdmVyaGVpZFNlcmlmV2ViXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCIuL1JPc2VyaWZ3ZWJib2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */`}</style>
      {/* <ThemedHeader theme={theme.className} /> */}
      <UtrechtPage>{children}</UtrechtPage>
    </div>
  );
}

FrameComponent.propTypes = {
  theme: PropTypes.any,
  children: PropTypes.any,
};
