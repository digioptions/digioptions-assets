// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */
import React from 'react';
class DigioptionsLogo extends React.PureComponent {
    render() {
        const { colorIcon, color0, color1, marginTopFact, marginBottomFact, logoText, subTitle, ...rest } = this.props;
        // * custom fillc colors
        // * added 'aria-label="DigiOptions"' and strokeWidth="0" to first <g/>
        // * added class "logoMain", "logoSub"
        var width;
        if (logoText) {
            width = 531.134;
        }
        else {
            width = 105.957;
        }
        var height;
        if (subTitle) {
            height = 150;
        }
        else {
            height = 105.957;
        }
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 ' + (-height * marginTopFact) + ' ' + width + ' ' + (height + height * marginBottomFact)} strokeWidth={0} {...rest}>
        <g className="logoMain" aria-label="DigiOptions">
          <title>DigiOptions</title>
          <path fill={colorIcon} d="M42.077 82.19c.081.032.157.06.236.09 16.172 5.883 34.08-2.467 39.968-18.637 5.884-16.172-2.467-34.08-18.639-39.966-16.17-5.886-34.079 2.465-39.965 18.637L9.46 81.373C.847 68.142-1.666 51.166 4.142 35.205c9.81-26.955 39.66-40.872 66.61-31.06 26.954 9.809 40.871 39.656 31.06 66.606-9.81 26.954-39.654 40.872-66.607 31.063a51.801 51.801 0 01-18.26-11.377l8.388-23.044.005.005 7.677-21.09c.059-.18.122-.353.184-.529 3.943-10.834 15.886-16.47 26.74-12.662z"/>
          {logoText &&
                <path fill={color0} d="M156.865 30.015H138.48l-8.239 46.459h18.387c4.876 0 9.325-.999 13.344-2.997 4.02-2 7.337-4.756 9.952-8.271 2.613-3.515 4.316-7.513 5.106-11.995.307-1.537.462-3.14.462-4.81 0-3.69-.814-6.92-2.439-9.687-1.625-2.768-3.997-4.91-7.117-6.425-3.12-1.516-6.81-2.274-11.071-2.274m-7.183 35.124h-4.481l4.283-23.921h4.416c3.25 0 5.776.79 7.578 2.372 1.8 1.583 2.702 3.845 2.702 6.788 0 1.012-.088 1.956-.264 2.833-.703 3.78-2.306 6.712-4.811 8.799-2.504 2.087-5.645 3.13-9.423 3.13m42.702-29.062c1.625 0 3.118-.35 4.481-1.055 1.361-.701 2.427-1.646 3.196-2.833a7.012 7.012 0 001.153-3.888c0-1.625-.582-2.955-1.746-3.987-1.164-1.032-2.758-1.55-4.778-1.55-1.67 0-3.174.364-4.514 1.089-1.34.724-2.395 1.692-3.163 2.899a7.168 7.168 0 00-1.153 3.92c0 1.582.581 2.88 1.746 3.889 1.164 1.012 2.756 1.516 4.778 1.516m-7.118 3.427l-6.589 36.969h12.981l6.526-36.97zm34.004-.462c-2.944 0-5.744.77-8.401 2.307-2.659 1.539-4.932 3.735-6.821 6.59-1.89 2.857-3.186 6.194-3.888 10.017a28.815 28.815 0 00-.395 4.613c0 4.437 1.175 7.94 3.525 10.51 2.35 2.571 5.459 3.855 9.324 3.855 2.506 0 4.779-.504 6.822-1.514 2.042-1.011 3.7-2.374 4.974-4.087l-.856 4.745c-.834 4.92-3.449 7.38-7.842 7.38-1.626 0-2.911-.33-3.855-.988-.945-.658-1.461-1.581-1.548-2.768H197.59l-.066 1.319c0 4.217 1.482 7.545 4.448 9.984 2.966 2.437 7.15 3.657 12.554 3.657 4.26 0 7.93-.836 11.006-2.505 3.074-1.67 5.512-3.899 7.314-6.688 1.802-2.79 3.008-5.921 3.624-9.39l6.459-36.575h-12.916l-.923 5.14c-.66-1.714-1.836-3.075-3.526-4.086-1.691-1.01-3.79-1.516-6.294-1.516m7.514 18.914c-.396 2.417-1.363 4.306-2.9 5.668-1.539 1.36-3.274 2.042-5.206 2.042-1.626 0-2.956-.505-3.988-1.516-1.032-1.01-1.548-2.438-1.548-4.284 0-.614.066-1.252.198-1.91.396-2.416 1.361-4.294 2.9-5.635 1.537-1.339 3.272-2.01 5.205-2.01 1.625 0 2.955.506 3.988 1.517 1.03 1.01 1.548 2.437 1.548 4.282 0 .572-.065 1.187-.197 1.846m30.708-21.88c1.625 0 3.118-.35 4.481-1.054 1.361-.701 2.427-1.646 3.196-2.833a7.012 7.012 0 001.153-3.888c0-1.625-.582-2.955-1.746-3.987-1.164-1.032-2.758-1.55-4.778-1.55-1.669 0-3.174.364-4.513 1.089-1.341.724-2.396 1.692-3.164 2.899a7.168 7.168 0 00-1.153 3.92c0 1.582.582 2.88 1.746 3.889 1.164 1.012 2.756 1.516 4.778 1.516m-7.118 3.427l-6.589 36.969h12.983l6.524-36.97z"/>}
          {logoText &&
                <path fill={color1} d="M286.554 76.936c5.404 0 10.192-1.208 14.366-3.624 4.174-2.416 7.424-5.778 9.752-10.083 2.33-4.305 3.494-9.183 3.494-14.63 0-3.822-.814-7.194-2.439-10.115-1.625-2.922-3.944-5.184-6.952-6.788-3.01-1.603-6.513-2.406-10.51-2.406-5.362 0-10.117 1.187-14.269 3.559-4.152 2.372-7.38 5.7-9.686 9.984-2.307 4.283-3.46 9.17-3.46 14.663 0 3.821.812 7.205 2.438 10.148 1.624 2.944 3.931 5.229 6.919 6.853 2.988 1.627 6.436 2.439 10.347 2.439m1.977-11.994c-2.857 0-5.053-.801-6.59-2.405-1.538-1.604-2.307-3.79-2.307-6.557 0-2.679.528-5.14 1.582-7.382 1.054-2.24 2.57-4.029 4.547-5.37 1.977-1.339 4.261-2.01 6.853-2.01 2.811 0 4.976.78 6.491 2.339 1.516 1.56 2.275 3.747 2.275 6.557 0 2.636-.518 5.086-1.55 7.348-1.033 2.263-2.526 4.076-4.481 5.438-1.955 1.361-4.228 2.042-6.82 2.042m45.997-20.297l.922-5.14h-12.916l-9.622 54.63h12.916l4.02-22.8c.747 1.713 1.944 3.075 3.592 4.085 1.648 1.012 3.724 1.516 6.228 1.516 2.943 0 5.743-.768 8.402-2.307 2.657-1.537 4.932-3.745 6.821-6.623 1.888-2.877 3.184-6.228 3.888-10.049.264-1.67.395-3.207.395-4.613 0-4.438-1.176-7.93-3.526-10.479-2.35-2.547-5.458-3.821-9.325-3.821-2.504 0-4.767.505-6.787 1.516-2.021 1.01-3.69 2.372-5.008 4.085M345.6 57.957c-.396 2.372-1.363 4.25-2.9 5.635-1.539 1.382-3.273 2.074-5.205 2.074-1.627 0-2.956-.516-3.988-1.548s-1.548-2.472-1.548-4.316c0-.57.065-1.186.197-1.845.396-2.373 1.373-4.24 2.933-5.601 1.559-1.362 3.283-2.044 5.172-2.044 1.626 0 2.955.506 3.988 1.516 1.031 1.012 1.548 2.417 1.548 4.217 0 .616-.065 1.252-.197 1.912m34.86-7.71h6.656l1.91-10.742h-6.655l1.582-8.963H370.97l-1.582 8.963h-4.548l-1.91 10.741h4.546l-2.174 12.192c-.263 1.45-.395 2.746-.395 3.888 0 6.766 4.02 10.148 12.06 10.148h5.667l1.977-11.005h-3.756c-.967 0-1.659-.164-2.076-.495-.419-.329-.627-.845-.627-1.548 0-.306.022-.57.067-.79zm21.747-14.169c1.624 0 3.118-.352 4.481-1.054 1.361-.703 2.427-1.648 3.196-2.834a7.012 7.012 0 001.153-3.888c0-1.625-.582-2.954-1.746-3.988-1.164-1.03-2.758-1.548-4.778-1.548-1.67 0-3.174.363-4.514 1.087-1.34.725-2.395 1.692-3.163 2.9a7.168 7.168 0 00-1.153 3.921c0 1.582.581 2.878 1.746 3.888 1.163 1.011 2.756 1.516 4.778 1.516m-7.118 3.427l-6.59 36.97h12.982l6.524-36.97zm30.907 37.43c4.35 0 8.281-.955 11.796-2.866 3.515-1.91 6.283-4.568 8.304-7.973 2.02-3.404 3.03-7.239 3.03-11.5 0-3.119-.691-5.854-2.075-8.204-1.384-2.351-3.318-4.163-5.799-5.438-2.483-1.273-5.328-1.91-8.535-1.91-4.349 0-8.281.966-11.796 2.9-3.514 1.933-6.272 4.612-8.27 8.038-1.999 3.427-2.998 7.25-2.998 11.467 0 3.12.68 5.844 2.043 8.172 1.361 2.33 3.284 4.13 5.767 5.404 2.481 1.275 5.325 1.91 8.533 1.91m1.977-11.137c-1.494 0-2.702-.47-3.625-1.416-.923-.945-1.384-2.34-1.384-4.185 0-1.67.319-3.272.956-4.81.636-1.538 1.537-2.79 2.703-3.757 1.162-.965 2.536-1.449 4.118-1.449 1.492 0 2.712.484 3.658 1.45.944.966 1.416 2.371 1.416 4.217 0 1.626-.319 3.208-.955 4.745-.637 1.537-1.56 2.79-2.768 3.756-1.21.967-2.581 1.45-4.119 1.45m53.575-26.623c-2.504 0-4.81.516-6.919 1.548-2.109 1.033-3.888 2.384-5.338 4.053l.922-5.272h-12.916l-6.589 36.97h12.981l3.559-20.166c.439-2.02 1.296-3.601 2.57-4.744 1.274-1.143 2.834-1.715 4.68-1.715 1.625 0 2.887.44 3.789 1.319.9.879 1.35 2.11 1.35 3.69a9.14 9.14 0 01-.197 1.78l-3.493 19.835h12.916l3.822-21.549c.264-1.405.396-2.723.396-3.953 0-3.691-1.021-6.579-3.065-8.667-2.043-2.085-4.865-3.13-8.468-3.13m30.51 37.76c5.053 0 9.16-1.042 12.325-3.13 3.162-2.085 4.744-4.952 4.744-8.6 0-2.152-.592-3.92-1.779-5.304a12.504 12.504 0 00-4.25-3.23c-1.649-.767-3.702-1.549-6.162-2.34-2.241-.746-3.833-1.36-4.779-1.845-.944-.482-1.416-1.141-1.416-1.976 0-.702.33-1.274.988-1.713.66-.439 1.494-.66 2.504-.66 1.407 0 2.483.341 3.23 1.023.746.681 1.097 1.613 1.054 2.8h11.599c.132-2.416-.407-4.614-1.615-6.59-1.209-1.977-3.032-3.526-5.469-4.646-2.439-1.12-5.328-1.68-8.667-1.68-3.12 0-5.865.494-8.237 1.482s-4.207 2.362-5.503 4.119c-1.296 1.757-1.944 3.735-1.944 5.93 0 2.286.604 4.153 1.812 5.602 1.208 1.45 2.626 2.55 4.251 3.295 1.625.748 3.69 1.516 6.195 2.306 2.152.704 3.69 1.286 4.613 1.747.923.461 1.384 1.11 1.384 1.944 0 .704-.363 1.275-1.088 1.713-.724.44-1.637.659-2.735.659-1.406 0-2.504-.33-3.294-.988-.791-.659-1.164-1.603-1.12-2.833h-12.456c-.088.79-.131 1.384-.131 1.778 0 2.198.68 4.142 2.043 5.832 1.361 1.692 3.25 2.999 5.666 3.922 2.416.922 5.163 1.384 8.238 1.384"/>}
        </g>
        {subTitle &&
                <g className="logoSub" aria-label="User-Driven Option Markets">
          <title>User-Driven Option Markets</title>
          <path d="M182.853 110.707v10.196q-.022 2.042-1.18 3.194-1.16 1.158-3.245 1.158-2.129 0-3.251-1.13-1.122-1.129-1.144-3.222v-10.196h1.796v10.124q0 1.448.608 2.165.623.71 1.991.71 1.376 0 1.992-.71.623-.724.623-2.172V110.7zm11.412 11.616q0-.558-.42-.963-.427-.406-1.636-.942-1.412-.586-1.992-1-.572-.412-.854-.94-.29-.53-.29-1.26 0-1.304.942-2.158.963-.87 2.44-.87 1.557 0 2.506.913.94.905.94 2.317h-1.737q0-.717-.478-1.216-.485-.507-1.231-.507-.768 0-1.21.398-.434.391-.434 1.065 0 .535.312.854.325.326 1.55.862 1.94.76 2.642 1.484.696.724.696 1.832 0 1.39-.956 2.23-.956.826-2.564.826-1.665 0-2.7-.956-1.03-.956-1.03-2.426h1.753q.03.891.543 1.39.507.508 1.434.508.87 0 1.325-.384.45-.398.45-1.057zm11.492 2.925q-1.984 0-3.048-1.18-1.065-1.195-1.086-3.49v-1.29q0-2.39 1.035-3.736 1.043-1.361 2.904-1.361 1.875 0 2.802 1.194.927 1.195.942 3.715v1.144h-5.953v.247q0 1.716.645 2.49.651.783 1.86.783.768 0 1.348-.29.594-.29 1.108-.927l.905 1.108q-1.13 1.593-3.462 1.593zm-.195-9.558q-1.086 0-1.608.753-.521.738-.586 2.302h4.2v-.239q-.073-1.52-.558-2.165-.47-.651-1.448-.651zm13.932.34q-.362-.073-.796-.073-1.34 0-1.868 1.47v7.626h-1.738v-10.66h1.687l.029 1.087q.702-1.29 1.984-1.29.413 0 .688.145zm8.654 3.671h-4.07v-1.484h4.07zm5.699 5.352v-14.346h3.418q2.512 0 3.903 1.572 1.39 1.571 1.39 4.417v2.404q0 2.846-1.412 4.403-1.412 1.55-4.091 1.55zm1.803-12.789v11.239h1.448q1.897 0 2.774-1.086.883-1.086.898-3.23v-2.534q0-2.274-.87-3.331-.868-1.058-2.635-1.058zm17.539 3.766q-.363-.073-.79-.073-1.34 0-1.868 1.47v7.626h-1.745v-10.66h1.694l.03 1.087q.702-1.29 1.983-1.29.413 0 .688.145zm7.306 9.023h-1.738v-10.66h1.738zm.145-13.491q0 .442-.254.739-.246.296-.745.296-.493 0-.739-.29-.246-.303-.246-.745t.246-.746q.246-.311.739-.311.492 0 .738.318.254.304.254.739zm9.29 10.84l2.021-8.009h1.774l-3.164 10.66h-1.304l-3.2-10.66h1.774zm12.977 2.846q-1.984 0-3.048-1.18-1.065-1.195-1.087-3.49v-1.29q0-2.39 1.036-3.736 1.043-1.361 2.904-1.361 1.875 0 2.802 1.194.927 1.195.941 3.715v1.144h-5.952v.247q0 1.716.645 2.49.651.783 1.86.783.768 0 1.347-.29.594-.29 1.108-.927l.906 1.108q-1.13 1.593-3.462 1.593zm-.195-9.558q-1.087 0-1.608.753-.521.738-.586 2.302h4.2v-.239q-.073-1.52-.558-2.165-.47-.651-1.448-.651zm11.166-1.304l.05 1.159q1.014-1.354 2.593-1.354 2.824 0 2.868 3.78v7.082h-1.738v-7.003q0-1.253-.42-1.774-.413-.536-1.253-.536-.652 0-1.173.435-.507.434-.826 1.13v7.748h-1.738v-10.66zm29.675 4.758q0 2.932-1.245 4.518-1.253 1.593-3.556 1.593-2.223 0-3.512-1.542-1.282-1.55-1.332-4.367v-2.7q0-2.875 1.274-4.505 1.267-1.636 3.548-1.636 2.267 0 3.527 1.571 1.274 1.557 1.303 4.454zm-1.796-2.513q0-2.281-.753-3.382-.738-1.115-2.274-1.115-1.491 0-2.259 1.122-.76 1.123-.768 3.31v2.578q0 2.194.76 3.345.768 1.159 2.29 1.159 1.52 0 2.244-1.072.724-1.057.76-3.259zm15.75 3.606q0 2.535-.92 3.766-.905 1.245-2.57 1.245-1.608 0-2.477-1.21v5.113h-1.738v-14.758h1.586l.087 1.18q.87-1.375 2.513-1.375 1.752 0 2.621 1.216.87 1.224.898 3.657zm-1.738-1q0-1.795-.55-2.642-.55-.855-1.774-.855-1.253 0-1.905 1.253v5.547q.645 1.224 1.927 1.224 1.18 0 1.738-.848.557-.861.564-2.606zm9.964-7.429v2.585h1.608v1.405h-1.608v6.612q0 .63.21.955.203.326.71.326.34 0 .695-.116l-.014 1.478q-.594.195-1.217.195-1.028 0-1.571-.738-.543-.74-.543-2.086v-6.626h-1.63v-1.405h1.63v-2.585zm9.226 13.245h-1.738v-10.66h1.738zm.145-13.491q0 .442-.254.739-.246.296-.745.296-.493 0-.74-.29-.245-.303-.245-.745t.246-.746q.246-.311.739-.311.492 0 .738.318.254.304.254.739zm5.902 7.669q0-2.325 1.122-3.68 1.137-1.36 2.983-1.36 1.854 0 2.977 1.325 1.137 1.318 1.166 3.591v1.13q0 2.317-1.123 3.664-1.122 1.347-2.998 1.347-1.854 0-2.969-1.303-1.122-1.318-1.158-3.549zm1.738 1.006q0 1.644.651 2.585.652.942 1.738.942 2.31 0 2.375-3.331v-1.202q0-1.637-.651-2.586-.652-.955-1.738-.955-1.08 0-1.731.955-.637.942-.637 2.571zm14.084-5.85l.043 1.158q1.014-1.354 2.593-1.354 2.824 0 2.867 3.78v7.082h-1.737v-7.003q0-1.253-.42-1.774-.413-.536-1.253-.536-.652 0-1.173.435-.507.434-.826 1.13v7.748h-1.738v-10.66zm22.666-3.68l3.743 11.703 3.744-11.703h2.332v14.346h-1.81v-5.59l.173-5.591-3.758 11.18h-1.376l-3.736-11.144.166 5.554v5.59h-1.803v-14.345zm21.854 14.346q-.16-.348-.232-1.159-.927 1.354-2.36 1.354-1.449 0-2.267-.804-.81-.818-.81-2.295 0-1.63 1.107-2.585 1.1-.956 3.02-.978h1.281v-1.13q0-.955-.42-1.361-.427-.405-1.296-.405-.782 0-1.274.477-.5.464-.5 1.18h-1.738q0-.817.478-1.556.485-.753 1.303-1.173.819-.427 1.825-.427 1.637 0 2.484.818.855.81.87 2.368v5.38q.014 1.231.34 2.136v.16zm-2.332-1.39q.645 0 1.231-.356.58-.354.84-.883v-2.542h-.984q-1.239.015-1.956.558-.724.536-.724 1.499 0 .905.362 1.318.362.405 1.231.405zm14.585-7.633q-.363-.073-.797-.073-1.332 0-1.868 1.47v7.626h-1.738v-10.66h1.687l.029 1.087q.702-1.29 1.984-1.29.413 0 .688.145zm8.103 4.15l-.927 1.056v3.817h-1.745v-15.135h1.737v9.052l3.332-4.577h2.085l-3.389 4.454 3.83 6.206H444.6zm13.715 5.068q-1.992 0-3.056-1.18-1.065-1.195-1.086-3.49v-1.29q0-2.39 1.042-3.736 1.043-1.361 2.904-1.361 1.876 0 2.795 1.194.927 1.195.95 3.715v1.144h-5.953v.247q0 1.716.644 2.49.652.783 1.861.783.768 0 1.347-.29.594-.29 1.108-.927l.905 1.108q-1.137 1.593-3.461 1.593zm-.196-9.558q-1.086 0-1.607.753-.522.738-.594 2.302h4.2v-.239q-.072-1.52-.55-2.165-.471-.651-1.449-.651zm11.811-3.882v2.585h1.6v1.405h-1.6v6.612q0 .63.203.955.21.326.71.326.347 0 .702-.116l-.022 1.478q-.594.195-1.21.195-1.035 0-1.578-.738-.543-.74-.543-2.086v-6.626h-1.622v-1.405h1.622v-2.585zm12.528 10.515q0-.558-.428-.963-.42-.406-1.636-.942-1.405-.586-1.992-1-.572-.412-.854-.94-.29-.53-.29-1.26 0-1.304.949-2.158.956-.87 2.433-.87 1.557 0 2.506.913.94.905.94 2.317h-1.73q0-.717-.485-1.216-.478-.507-1.231-.507-.768 0-1.21.398-.434.391-.434 1.065 0 .535.319.854.318.326 1.542.862 1.94.76 2.643 1.484.703.724.703 1.832 0 1.39-.956 2.23-.956.826-2.564.826-1.665 0-2.7-.956-1.036-.956-1.036-2.426h1.752q.03.891.543 1.39.507.508 1.441.508.87 0 1.318-.384.457-.398.457-1.057zM163.656 119.701h-33.122v-1.484h33.122zm359.796 0H490.33v-1.484h33.122z"/>
        </g>}
      </svg>);
    }
}
DigioptionsLogo.defaultProps = {
    colorIcon: '#05497a',
    color0: '#05497a',
    color1: '#0575c4',
    marginTopFact: 0,
    marginBottomFact: 0,
    logoText: true,
    subTitle: false,
};
export { DigioptionsLogo, };
//# sourceMappingURL=digioptions_logo.js.map