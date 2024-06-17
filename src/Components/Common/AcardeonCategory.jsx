import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseDetails } from "../../Core/Services/api/CourseDetail";

export default function AcardeonCategory() {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { courseId } = useParams();

  const getcourseDetail = async () => {
    try {
      const result = await CourseDetails(courseId);
      setCourseDetail(result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getcourseDetail();
  }, [courseId]);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  const faqs = [
    { question: "نام دوره", answer: courseDetail.title },
    { question: "نام استاد", answer: courseDetail.teacherName },
    { question: "قیمت دوره", answer: courseDetail.cost },
    { question: "شروع و پایان دوره", answer: courseDetail.startTime },
  ];

  return (
    <div className="bg-gray-900 rounded mt-4">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:py-32 lg:py-20 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
          جزییات دوره
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-white/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-300">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
