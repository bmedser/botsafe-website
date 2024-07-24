import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileContract, faFileSignature } from '@fortawesome/free-solid-svg-icons';

const Card = ({ icon, title, children }) => (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-600 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-500">
        <div className="flex items-center border-b border-gray-300 pb-4 mb-4 dark:border-gray-700">
            <FontAwesomeIcon icon={icon} className="text-3xl text-blue-600 dark:text-blue-400 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        </div>
        <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
);

const LegalPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
            <div className="container mx-auto p-6 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Legal Information</h1>

                <Card icon={faFileAlt} title="Open Source Licenses">
                    <p className="mb-4">This application uses the following open source libraries:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Qt</strong> - Licensed under the GNU Lesser General Public License v3 (LGPLv3).
                            The source code for Qt can be found at <a href="https://github.com/qt/qt5" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/qt/qt5</a>.
                        </li>
                        <li>
                            <strong>OpenCV</strong> - Licensed under the Apache License 2.0.
                            The source code for OpenCV can be found at <a href="https://github.com/opencv/opencv" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/opencv/opencv</a>.
                        </li>
                        <li>
                            <strong>Tesseract</strong> - Licensed under the Apache License 2.0.
                            The source code for Tesseract can be found at <a href="https://github.com/tesseract-ocr/tesseract" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/tesseract-ocr/tesseract</a>.
                        </li>
                        <li>
                            <strong>libtorch</strong> - Licensed under the BSD-style license.
                            The source code for libtorch can be found at <a href="https://github.com/pytorch/pytorch" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/pytorch/pytorch</a>.
                        </li>
                    </ul>
                </Card>

                <Card icon={faFileContract} title="Qt under LGPLv3">
                    <p className="mb-4">In accordance with the LGPLv3 license terms for Qt:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>We acknowledge that this application uses Qt under the LGPLv3 license.</li>
                        <li>Users have the right to obtain the source code of the Qt libraries used in this application.</li>
                        <li>Users may modify and replace the Qt libraries used in this application, subject to the terms of the LGPLv3.</li>
                        <li>Any modifications made to the Qt libraries by us are available upon request.</li>
                    </ul>
                </Card>

                <Card icon={faFileSignature} title="Third-Party Licenses">
                    <p>
                        For the full text of the licenses mentioned above and any additional third-party licenses,
                        please refer to the LICENSE files included with this application or visit the respective
                        project websites.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default LegalPage;
