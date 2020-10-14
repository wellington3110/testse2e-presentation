import React from 'react';
import { animated } from 'react-spring';

export default ({ style = {} }) => (
    <animated.svg style={{ height: "100px", ...style }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m475.734375 44.789062h-188.140625c-15.648438 0-28.335938 12.6875-28.335938 28.335938v106.421875c0 15.648437 12.6875 28.335937 28.335938 28.335937h66.925781l-10.816406 43.660157c-1.410156 5.6875 5.136719 9.96875 9.785156 6.398437l65.167969-50.058594h57.082031c15.648438 0 28.335938-12.683593 28.335938-28.335937v-106.421875c-.003907-15.648438-12.6875-28.335938-28.339844-28.335938zm0 0" fill="#88dbfd"/><path d="m352.066406 217.773438-8.363281 33.769531c-1.410156 5.6875 5.136719 9.96875 9.785156 6.398437l65.167969-50.058594h-53.714844zm0 0" fill="#5abfe9"/><path d="m475.734375 44.789062h-53.714844c15.652344 0 28.335938 12.6875 28.335938 28.335938v106.421875c0 15.648437-12.683594 28.335937-28.335938 28.335937h53.714844c15.652344 0 28.335937-12.683593 28.335937-28.335937v-106.421875c0-15.648438-12.683593-28.335938-28.335937-28.335938zm0 0" fill="#5abfe9"/><path d="m402.667969 380.441406c-1.410157-24.046875-16.675781-43.640625-39.394531-54.28125-27.808594-13.019531-103.539063-32.71875-103.539063-32.71875-7.320313-1.359375-12.628906-7.746094-12.628906-15.1875v-43.289062h-82.332031v43.289062c0 7.441406-5.308594 13.828125-12.625 15.1875 0 0-75.730469 19.699219-103.542969 32.71875-22.71875 10.640625-37.984375 30.234375-39.394531 54.28125l-1.707032 103.207032c-.140625 11.472656 9.125 20.851562 20.601563 20.851562h355.667969c11.476562 0 20.742187-9.378906 20.605468-20.851562zm0 0" fill="#fcc18b"/><path d="m402.667969 380.441406c-1.410157-24.046875-16.675781-43.640625-39.394531-54.28125-27.808594-13.019531-103.539063-32.71875-103.539063-32.71875-7.320313-1.359375-12.628906-7.746094-12.628906-15.1875v-43.289062h-53.714844v69.253906c0 7.441406 5.308594 13.828125 12.625 15.183594 0 0 75.734375 19.703125 103.542969 32.722656 22.71875 10.636719 37.984375 30.234375 39.394531 54.277344l1.625 98.097656h33.195313c11.476562 0 20.742187-9.378906 20.605468-20.851562zm0 0" fill="#eaab65"/><path d="m120.585938 125.367188h-10.808594c-3.914063 0-7.523438 1.324218-10.398438 3.546874-4.992187 3.859376-7.183594 10.351563-6.054687 16.5625l4.246093 23.371094c3.292969 17.320313 23.042969 9.40625 23.042969 9.40625zm0 0" fill="#eaab65"/><path d="m291.292969 125.367188h10.808593c3.914063 0 7.523438 1.324218 10.398438 3.546874 4.992188 3.859376 7.183594 10.351563 6.054688 16.5625l-4.246094 23.371094c-3.292969 17.320313-23.042969 9.40625-23.042969 9.40625zm0 0" fill="#fcc18b"/><path d="m265.847656 36.546875c-14.054687-12.996094-33.8125-24.335937-59.90625-24.652344-26.097656.316407-45.855468 11.65625-59.910156 24.652344-17.925781 16.574219-27.636719 41.191406-27.636719 66.59375l.023438 88.574219c0 41.875 54.425781 85.238281 87.523437 85.238281 33.09375 0 87.523438-43.363281 87.523438-85.238281l.023437-88.574219c-.003906-25.402344-9.714843-50.019531-27.640625-66.59375zm0 0" fill="#fcc18b"/><path d="m265.847656 36.546875c-14.054687-12.996094-33.8125-24.335937-59.90625-24.652344-9.84375.121094-18.785156 1.808594-26.859375 4.5625 13.332031 4.546875 24.296875 11.996094 33.050781 20.089844 17.925782 16.574219 27.636719 41.191406 27.636719 66.59375l-.023437 88.574219c0 31.683594-31.160156 64.21875-60.664063 78.175781 9.488281 4.488281 18.804688 7.0625 26.855469 7.0625 33.097656 0 87.523438-43.363281 87.523438-85.238281l.023437-88.574219c0-25.402344-9.710937-50.019531-27.636719-66.59375zm0 0" fill="#eaab65"/><path d="m260.097656 7.5h-108.316406c-27.871094 0-50.460938 22.59375-50.460938 50.460938v69.632812s13.894532-.316406 22.824219 8.519531c1.859375 1.839844 5.019531.496094 5.019531-2.121093v-54.570313c0-12.320313 9.988282-22.304687 22.304688-22.304687h20.269531c5.316407 0 10.46875 1.835937 14.582031 5.203124l1.988282 1.625c4.972656 4.066407 11.203125 6.289063 17.628906 6.289063 6.429688 0 12.65625-2.222656 17.632812-6.289063l1.988282-1.625c4.113281-3.367187 9.265625-5.203124 14.582031-5.203124h20.265625c12.320312 0 22.308594 9.984374 22.308594 22.304687v54.574219c0 2.613281 3.160156 3.960937 5.019531 2.121094 8.925781-8.839844 22.824219-8.523438 22.824219-8.523438v-69.628906c0-27.871094-22.59375-50.464844-50.460938-50.464844zm0 0" fill="#426175"/><path d="m260.097656 7.5h-18.734375c9.425781 11.097656 15.339844 27.765625 15.488281 49.617188h3.558594c12.316406 0 22.304688 9.984374 22.304688 22.304687v54.574219c0 2.613281 3.160156 3.960937 5.019531 2.121094 8.929687-8.839844 22.824219-8.523438 22.824219-8.523438v-69.628906c0-27.871094-22.59375-50.464844-50.460938-50.464844zm0 0" fill="#2c4456"/><path d="m363.273438 326.160156c-16.183594-7.574218-48.589844-17.414062-72.863282-24.316406l-5.25 1.992188c-51.042968 19.332031-107.398437 19.332031-158.441406 0l-5.25-1.992188c-24.273438 6.902344-56.679688 16.742188-72.863281 24.316406-22.71875 10.640625-37.984375 30.234375-39.394531 54.28125l-1.707032 103.207032c-.140625 11.472656 9.125 20.851562 20.601563 20.851562h355.667969c11.476562 0 20.742187-9.378906 20.605468-20.851562l-1.710937-103.207032c-1.410157-24.046875-16.675781-43.640625-39.394531-54.28125zm0 0" fill="#33bca5"/><path d="m332.210938 478.636719h-256.304688c-7.792969 0-14.265625-6.023438-14.820312-13.800781l-10.480469-147.074219c-.613281-8.601563 6.199219-15.917969 14.820312-15.917969h277.269531c8.621094 0 15.433594 7.316406 14.820313 15.917969l-10.484375 147.074219c-.554688 7.777343-7.023438 13.800781-14.820312 13.800781zm0 0" fill="#f2f2f2"/><path d="m342.695312 301.84375h-54.109374c8.621093 0 15.433593 7.316406 14.820312 15.917969l-11.464844 160.875h40.269532c7.796874 0 14.269531-6.023438 14.820312-13.800781l10.484375-147.074219c.613281-8.601563-6.199219-15.917969-14.820313-15.917969zm0 0" fill="#cdd6df"/><path d="m350.59375 504.5h-289.308594c-7.140625 0-12.929687-5.789062-12.929687-12.929688 0-7.144531 5.789062-12.933593 12.929687-12.933593h289.308594c7.140625 0 12.929688 5.789062 12.929688 12.933593 0 7.140626-5.789063 12.929688-12.929688 12.929688zm0 0" fill="#cdd6df"/><path d="m226.632812 396.171875c0 11.429687-9.265624 20.695313-20.695312 20.695313s-20.695312-9.265626-20.695312-20.695313 9.265624-20.695313 20.695312-20.695313 20.695312 9.265626 20.695312 20.695313zm0 0" fill="#fff"/><path d="m370.835938 117.042969c0-3.796875-3.523438-6.761719-6.300782-6.761719-.648437 0-1.296875.09375-1.757812.464844l-23.527344 15.28125c-2.128906 1.390625-2.871094 3.613281-2.871094 5.1875 0 1.574218.742188 3.796875 2.871094 5.1875l23.527344 15.28125c.460937.371094 1.109375.464844 1.757812.464844 2.777344 0 6.300782-2.964844 6.300782-6.761719 0-1.574219-.648438-2.964844-1.667969-3.613281l-16.304688-10.558594 16.304688-10.558594c1.015625-.648438 1.667969-2.039062 1.667969-3.613281zm0 0"/><path d="m417.425781 85.367188c-1.667969 0-3.152343.738281-3.890625 2.316406l-32.511718 66.777344c-.277344.554687-.464844 1.203124-.464844 1.761718 0 2.3125 2.039062 4.90625 5.191406 4.90625 1.757812 0 3.519531-.925781 4.167969-2.3125l32.601562-66.78125c.277344-.554687.371094-1.203125.371094-1.761718-.003906-2.960938-2.875-4.90625-5.464844-4.90625zm0 0"/><path d="m464.199219 126.027344-23.523438-15.28125c-.464843-.371094-1.113281-.464844-1.761719-.464844-2.777343 0-6.296874 2.964844-6.296874 6.761719 0 1.574219.648437 2.964843 1.667968 3.613281l16.300782 10.558594-16.300782 10.558594c-1.019531.648437-1.667968 2.039062-1.667968 3.613281 0 3.796875 3.519531 6.761719 6.296874 6.761719.648438 0 1.296876-.09375 1.761719-.464844l23.523438-15.28125c2.132812-1.390625 2.871093-3.613282 2.871093-5.1875 0-1.574219-.738281-3.796875-2.871093-5.1875zm0 0"/><path d="m475.734375 37.289062h-161.484375c-8.34375-21.78125-29.472656-37.289062-54.15625-37.289062h-108.3125c-31.957031 0-57.960938 26.003906-57.960938 57.960938v65.816406c-6.460937 5.566406-9.464843 14.273437-7.875 23.039062l4.257813 23.429688c1.53125 8.046875 5.804687 12.183594 9.117187 14.234375 3.707032 2.292969 7.820313 3.050781 11.597657 3.070312v4.164063c0 21.125 12.324219 44.40625 33.8125 63.878906 4.046875 3.664062 8.253906 7.042969 12.542969 10.097656v12.5625c0 3.828125-2.730469 7.113282-6.496094 7.8125-.175782.03125-.347656.070313-.519532.113282-.128906.035156-13.003906 3.390624-29.835937 8.164062h-54.996094c-6.183593 0-12.148437 2.597656-16.363281 7.121094-4.214844 4.523437-6.378906 10.660156-5.9375 16.828125l.148438 2.117187c-24.597657 12.335938-40.074219 34.453125-41.550782 59.589844-.003906.105469-.007812.210938-.011718.316406l-1.70703175 103.238282c-.09375005 7.570312 2.78906275 14.707031 8.10546875 20.09375 5.324219 5.386718 12.421875 8.351562 19.996094 8.351562h355.667969c7.570312 0 14.671874-2.964844 19.992187-8.351562 5.320313-5.386719 8.203125-12.519532 8.109375-20.125l-1.707031-103.207032c-.003907-.105468-.007813-.210937-.015625-.316406-1.515625-25.863281-17.851563-48.527344-43.703125-60.632812-.472657-.222657-.96875-.449219-1.480469-.679688l.027344-.394531c.4375-6.167969-1.726563-12.300781-5.9375-16.828125-4.214844-4.523438-10.179688-7.121094-16.363282-7.121094h-51.238281c-16.828125-4.773438-29.707031-8.128906-29.835937-8.160156-.171875-.046875-.34375-.085938-.519532-.117188-3.765624-.699218-6.496093-3.984375-6.496093-7.8125v-12.558594c4.289062-3.058593 8.496093-6.4375 12.542969-10.101562 13.65625-12.375 23.613281-26.289062 29.054687-40.210938h48.730469l-8.511719 34.355469c-1.417969 5.730469.855469 11.519531 5.792969 14.75 2.320312 1.519531 4.921875 2.273438 7.511718 2.273438 2.929688 0 5.84375-.960938 8.328126-2.871094l63.148437-48.507813h54.53125c19.761719 0 35.835937-16.074218 35.835937-35.835937v-106.421875c0-19.757812-16.074218-35.835938-35.835937-35.835938zm-174.757813 99.445313c2.867188-.976563 5.582032-1.378906 7.351563-1.539063 2.355469 2.089844 3.464844 5.53125 2.847656 8.9375l-4.234375 23.3125c-.617187 3.253907-1.867187 4.027344-2.277344 4.28125-.871093.539063-2.15625.816407-3.695312.832032zm-192.15625-78.773437c0-23.6875 19.273438-42.960938 42.960938-42.960938h108.316406c23.6875 0 42.960938 19.273438 42.960938 42.960938v62.839843c-3.710938.65625-8.332032 1.914063-12.84375 4.320313v-45.699219c0-16.433594-13.371094-29.804687-29.804688-29.804687h-20.269531c-7.027344 0-13.890625 2.449218-19.332031 6.894531l-1.984375 1.625c-3.625 2.964843-8.203125 4.597656-12.886719 4.597656s-9.257812-1.632813-12.882812-4.59375l-1.988282-1.628906c-5.4375-4.445313-12.304687-6.894531-19.332031-6.894531h-20.265625c-16.433594 0-29.804688 13.367187-29.804688 29.804687v45.695313c-4.511718-2.402344-9.132812-3.664063-12.84375-4.316407zm-1.605468 113.765624c-.410156-.253906-1.660156-1.027343-2.265625-4.21875l-4.246094-23.371093c-.617187-3.40625.492187-6.84375 2.839844-8.9375 1.769531.160156 4.488281.554687 7.359375 1.53125l.007812 35.828125c-1.535156-.015625-2.820312-.292969-3.695312-.832032zm-66.359375 319.839844c0 1.882813.257812 3.703125.734375 5.433594h-13.484375c-3.53125 0-6.839844-1.382812-9.324219-3.894531-2.480469-2.511719-3.820312-5.839844-3.78125-9.335938l1.707031-103.042969c1.109375-18.007812 11.089844-33.621093 27.742188-43.832031l9.15625 128.472657c.167969 2.359374.707031 4.613281 1.550781 6.710937-8.28125 2.609375-14.300781 10.359375-14.300781 19.488281zm313.65625-26.199218 9.304687-130.542969c18.820313 10.097656 30.167969 26.625 31.355469 45.902343l1.707031 103.011719c.039063 3.527344-1.304687 6.855469-3.78125 9.367188-2.484375 2.511719-5.792968 3.894531-9.324218 3.894531h-13.484376c.480469-1.730469.734376-3.550781.734376-5.433594 0-10.363281-7.753907-18.945312-17.765626-20.253906.675782-1.878906 1.109376-3.871094 1.253907-5.945312zm1.511719 26.199218c0 2.996094-2.4375 5.433594-5.429688 5.433594h-289.308594c-2.992187 0-5.429687-2.4375-5.429687-5.433594 0-2.992187 2.4375-5.429687 5.429687-5.429687h289.308594c2.992188 0 5.429688 2.4375 5.429688 5.429687zm-7.941407-179.878906c1.40625 1.511719 2.101563 3.476562 1.953125 5.539062l-10.484375 147.078126c-.273437 3.832031-3.496093 6.832031-7.339843 6.832031h-256.304688c-3.839844 0-7.0625-3-7.339844-6.835938l-10.480468-147.074219c-.148438-2.0625.546874-4.027343 1.953124-5.539062 1.410157-1.511719 3.320313-2.34375 5.386719-2.34375h277.269531c2.0625 0 3.976563.832031 5.386719 2.34375zm-101.886719-17.34375h-80.511718c4.101562-4.171875 6.589844-9.882812 6.589844-16.089844v-3.355468c11.824218 6.121093 23.574218 9.554687 33.664062 9.554687s21.839844-3.433594 33.667969-9.554687v3.355468c0 6.207032 2.488281 11.917969 6.589843 16.089844zm10.878907-49.867188c-16.746094 15.171876-36.816407 24.976563-51.136719 24.976563-14.316406 0-34.386719-9.804687-51.132812-24.976563-18.359376-16.628906-28.886719-35.863281-28.886719-52.765624l-.015625-47.25c.097656 0 .195312.003906.292968.003906 1.355469 0 2.722657-.265625 4.03125-.8125 3.910157-1.632813 6.4375-5.425782 6.4375-9.660156v-54.570313c0-8.164063 6.640626-14.804687 14.804688-14.804687h20.269531c3.574219 0 7.066407 1.246093 9.832031 3.507812l1.992188 1.628906c6.296875 5.144532 14.242188 7.980469 22.375 7.980469s16.082031-2.835937 22.378906-7.984375l1.988282-1.625c2.765624-2.261719 6.261718-3.507812 9.835937-3.507812h20.265625c8.164062 0 14.808594 6.640624 14.808594 14.804687v54.570313c0 4.238281 2.523437 8.027343 6.4375 9.660156 1.398437.585937 2.871094.847656 4.320312.808594l-.011718 47.253906c.003906 16.898437-10.527344 36.132812-28.886719 52.761718zm239.496093-64.929687c0 11.488281-9.34375 20.835937-20.835937 20.835937h-57.078125c-1.652344 0-3.257812.546876-4.566406 1.554688l-62.210938 47.785156 9.917969-40.035156c.554687-2.238281.050781-4.609375-1.371094-6.425781-1.421875-1.816407-3.601562-2.878907-5.90625-2.878907h-54.222656c.441406-2.917968.667969-5.8125.667969-8.667968v-4.164063c3.773437-.019531 7.886718-.777343 11.59375-3.070312 3.316406-2.050781 7.589844-6.1875 9.128906-14.292969l4.246094-23.371094c1.59375-8.765625-1.417969-17.476562-7.875-23.039062v-65.816406c0-1.910157-.09375-3.804688-.277344-5.671876h157.953125c11.492187 0 20.835937 9.347657 20.835937 20.835938zm0 0"/><path d="m205.9375 424.367188c15.546875 0 28.195312-12.648438 28.195312-28.195313s-12.648437-28.195313-28.195312-28.195313-28.195312 12.648438-28.195312 28.195313 12.648437 28.195313 28.195312 28.195313zm0-41.390626c7.277344 0 13.195312 5.921876 13.195312 13.195313 0 7.277344-5.917968 13.195313-13.195312 13.195313-7.273438 0-13.195312-5.917969-13.195312-13.195313 0-7.273437 5.921874-13.195313 13.195312-13.195313zm0 0"/>
    </animated.svg>
);