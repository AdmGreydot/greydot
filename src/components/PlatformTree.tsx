
import { PLATFORMS } from '../data/platforms';
import classes from './PlatformTree.module.css';

type Position = {
    x: number;
    y: number;
};

const TREE_CENTER: Position = { x: 61, y: 78 };
const MAIN_NODE_WIDTH = 6; 

const mainNodeRadiusY =
    (MAIN_NODE_WIDTH / 2) / (9 / 16);

function getPlatformPosition(index: number, total: number) {
    const spreadX = 20;
    const topY = 23;
    const bottomY = 43;

    const t = total === 1
        ? 0
        : (index / (total - 1)) * 2 - 1;

    return {
        x: TREE_CENTER.x + t * spreadX,
        y: topY + Math.pow(Math.abs(t), 1.5) * (bottomY - topY),
    };
}

export default function PlatformTree() {
    const positionedPlatforms = PLATFORMS.map(
        (platform, index) => ({
            ...platform,
            ...getPlatformPosition(index, PLATFORMS.length),
        }),
    );

    return (
        <section className={classes.tree}>
            <img
                className={classes.background}
                src="/tree.png"
                alt=""
            />

            <svg
                className={classes.connections}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {positionedPlatforms.map((platform, index) => {
                    const stemLength = 14;
                    const offsets = positionedPlatforms.length === 1
                        ? [0]
                        : positionedPlatforms.map((_, i) =>
                            (i - (positionedPlatforms.length - 1) / 2) * 1.8
                        );

                    const startX = TREE_CENTER.x + offsets[index];
                    const startY = TREE_CENTER.y - mainNodeRadiusY;
                    const stemY = startY - stemLength;

                    const endX = platform.x;
                    const endY = platform.y;

                    const control1X = startX;
                    const control1Y = stemY - 5;

                    const control2X = endX;
                    const control2Y = endY + 10;
                    const pathData = `
                        M ${startX} ${startY}
                        L ${startX} ${stemY}
                        C ${control1X} ${control1Y},
                        ${control2X} ${control2Y},
                        ${endX} ${endY}
                    `;
                    return (
                        <g key={platform.id}>
                            <path
                                d={pathData}
                                className={classes.connection}
                            />
                            <path
                                d={pathData}
                                className={classes.flow}
                                style={{
                                    animationDelay: `${index * 0.7}s`,
                                }}
                            />
                        </g>
                    );
                })}
            </svg>

            <a
                href="/"
                className={`${classes.node} ${classes.mainNode}`}
                style={{
                    left: `${TREE_CENTER.x}%`,
                    top: `${TREE_CENTER.y}%`,
                }}
                aria-label="Greydot — forsiden"
            >
                <img src="/platforms/logo.png" alt="Greydot" />
            </a>

            {positionedPlatforms.map((platform) => (
                <a
                    key={platform.id}
                    href={platform.link}
                    className={classes.node}
                    target='_blank'
                    rel="nofollow"
                    style={{
                        left: `${platform.x}%`,
                        top: `${platform.y}%`,
                    }}
                    aria-label={platform.name}
                >
                    <img src={platform.logo} alt="" />
                </a>
            ))}
        </section>
    );
}
