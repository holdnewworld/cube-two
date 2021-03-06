import { debug, log, error } from '../logger';

import {
    cloneObject,
    nextState,
    getLeft,
    getRight,
    getDown,
    getBack,
    getUp,
    getFront,
} from '../cube-util';

import dictCube from '../dictionaries/dict-cube';
import dictCubeTransform from '../dictionaries/dict-cube-transform';

export function reducer({ action, stateCodes }) {

    function rotateCubeStates(c1, c2, c3, c4, actionCode) {
        c1.code = dictCube[c1.code][actionCode];
        c2.code = dictCube[c2.code][actionCode];
        c3.code = dictCube[c3.code][actionCode];
        c4.code = dictCube[c4.code][actionCode];
    }

    function applyF() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[2];
        let c4 = stateCodes[3];

        // Rotate the state of the cubes
        rotateCubeStates(c1, c2, c3, c4, 'z');

        // Rotate the placement of the cubes
        let first = cloneObject(c1);
        stateCodes[0] = c3;
        stateCodes[2] = c4;
        stateCodes[3] = c2;
        stateCodes[1] = first;
    }

    function applyF_() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[2];
        let c4 = stateCodes[3];

        rotateCubeStates(c1, c2, c3, c4, '-z');

        let first = cloneObject(c1);
        stateCodes[0] = c2;
        stateCodes[1] = c4;
        stateCodes[3] = c3;
        stateCodes[2] = first;
    }

    function applyB_() {
        let c1 = stateCodes[4];
        let c2 = stateCodes[5];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        rotateCubeStates(c1, c2, c3, c4, 'z');

        let first = cloneObject(c1);
        stateCodes[4] = c3;
        stateCodes[6] = c4;
        stateCodes[7] = c2;
        stateCodes[5] = first;
    }

    function applyB() {
        let c1 = stateCodes[4];
        let c2 = stateCodes[5];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        rotateCubeStates(c1, c2, c3, c4, '-z');

        let first = cloneObject(c1);
        stateCodes[4] = c2;
        stateCodes[5] = c4;
        stateCodes[7] = c3;
        stateCodes[6] = first;
    }

    function applyR() {
        let c1 = stateCodes[1];
        let c2 = stateCodes[3];
        let c3 = stateCodes[5];
        let c4 = stateCodes[7];

        rotateCubeStates(c1, c2, c3, c4, 'x');

        let first = cloneObject(c1);
        stateCodes[1] = c2;
        stateCodes[3] = c4;
        stateCodes[7] = c3;
        stateCodes[5] = first;
    }

    function applyR_() {
        let c1 = stateCodes[1];
        let c2 = stateCodes[3];
        let c3 = stateCodes[5];
        let c4 = stateCodes[7];

        rotateCubeStates(c1, c2, c3, c4, '-x');

        let first = cloneObject(c1);
        stateCodes[1] = c3;
        stateCodes[5] = c4;
        stateCodes[7] = c2;
        stateCodes[3] = first;
    }

    function applyL() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[2];
        let c3 = stateCodes[4];
        let c4 = stateCodes[6];

        rotateCubeStates(c1, c2, c3, c4, '-x');

        let first = cloneObject(c1);
        stateCodes[0] = c3;
        stateCodes[4] = c4;
        stateCodes[6] = c2;
        stateCodes[2] = first;
    }

    function applyL_() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[2];
        let c3 = stateCodes[4];
        let c4 = stateCodes[6];

        rotateCubeStates(c1, c2, c3, c4, 'x');

        let first = cloneObject(c1);
        stateCodes[0] = c2;
        stateCodes[2] = c4;
        stateCodes[6] = c3;
        stateCodes[4] = first;
    }

    function applyU() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[4];
        let c4 = stateCodes[5];

        rotateCubeStates(c1, c2, c3, c4, '-y');

        let first = cloneObject(c1);
        stateCodes[0] = c2;
        stateCodes[1] = c4;
        stateCodes[5] = c3;
        stateCodes[4] = first;
    }

    function applyU_() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[4];
        let c4 = stateCodes[5];

        rotateCubeStates(c1, c2, c3, c4, 'y');

        let first = cloneObject(c1);
        stateCodes[0] = c3;
        stateCodes[4] = c4;
        stateCodes[5] = c2;
        stateCodes[1] = first;
    }


    function applyD() {
        let c1 = stateCodes[2];
        let c2 = stateCodes[3];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        rotateCubeStates(c1, c2, c3, c4, 'y');

        let first = cloneObject(c1);
        stateCodes[2] = c3;
        stateCodes[6] = c4;
        stateCodes[7] = c2;
        stateCodes[3] = first;
    }

    function applyD_() {
        let c1 = stateCodes[2];
        let c2 = stateCodes[3];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        rotateCubeStates(c1, c2, c3, c4, '-y');

        let first = cloneObject(c1);
        stateCodes[2] = c2;
        stateCodes[3] = c4;
        stateCodes[7] = c3;
        stateCodes[6] = first;
    }


    switch (action) {
        case 'F':
            applyF();
            break;
        case 'F_':
            applyF_();
            break;
        case 'B':
            applyB();
            break;
        case 'B_':
            applyB_();
            break;
        case 'z':
            applyF();
            applyB_();
            break;
        case 'z2':
            applyF();
            applyB_();
            applyF();
            applyB_();
            break;
        case 'z_':
            applyF_();
            applyB();
            break;
        case 'z2_':
            applyF_();
            applyB();
            applyF_();
            applyB();
            break;
        case 'R':
            applyR();
            break;
        case 'R_':
            applyR_();
            break;
        case 'L':
            applyL();
            break;
        case 'L_':
            applyL_();
            break;
        case 'x':
            applyR();
            applyL_();
            break;
        case 'x2':
            applyR();
            applyL_();
            applyR();
            applyL_();
            break;
        case 'x_':
            applyR_();
            applyL();
            break;
        case 'x2_':
            applyR_();
            applyL();
            applyR_();
            applyL();
            break;
        case 'U':
            applyU();
            break;
        case 'U_':
            applyU_();
            break;
        case 'D':
            applyD();
            break;
        case 'D_':
            applyD_();
            break;
        case 'y':
            applyU_();
            applyD();
            break;
        case 'y2':
            applyU_();
            applyD();
            applyU_();
            applyD();
            break;
        case 'y_':
            applyU();
            applyD_();
            break;
        case 'y2_':
            applyU();
            applyD_();
            applyU();
            applyD_();
            break;
    }

    //log(JSON.stringify(stateCodes));
    return stateCodes;
}