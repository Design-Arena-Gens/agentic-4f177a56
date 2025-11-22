import { opportunities } from "@/data/opportunities";

export default function Home() {
  const numberFormatter = new Intl.NumberFormat("en-US");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12 text-slate-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-200">
            Amazon.ae Opportunity Radar
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            خمس أفكار منتجات بربحية عالية وطلب قوي في سوق الإمارات
          </h1>
          <p className="max-w-3xl text-base text-slate-200/80 sm:text-lg">
            تم اختيار هذه الفرص اعتماداً على مزيج من حجم البحث التقديري،
            قابلية التسعير، وعدد البائعين المباشرين المحدود (≤ 3). استخدم هذه
            القائمة كنقطة انطلاق للتحقق من الموردين، هوامش الربح، والحملات
            التسويقية قبل الإطلاق.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {opportunities.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/5 transition hover:border-emerald-300/60 hover:shadow-emerald-500/20"
            >
              <div className="flex flex-col gap-2">
                <span className="w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                  {item.category}
                </span>
                <h2 className="text-2xl font-semibold text-white">
                  {item.name}
                </h2>
                <p className="text-sm leading-relaxed text-slate-200/80">
                  {item.description}
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-4 text-sm text-slate-100 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">
                    متوسط السعر
                  </dt>
                  <dd className="text-lg font-semibold text-white">
                    {numberFormatter.format(item.averagePriceAED)}{" "}
                    <span className="text-sm text-slate-300">AED</span>
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">
                    حجم البحث/شهر (تقديري)
                  </dt>
                  <dd className="text-lg font-semibold text-white">
                    {numberFormatter.format(item.estimatedMonthlySearches)}
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">
                    عدد المنافسين المباشرين
                  </dt>
                  <dd className="text-lg font-semibold text-emerald-200">
                    {item.competitorCount}
                  </dd>
                </div>
              </dl>

              <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate-200/80">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                    ملاحظات التوريد
                  </h3>
                  <p>{item.sourcingNotes}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                    أفكار التميز
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {item.differentiationIdeas.map((idea) => (
                      <li
                        key={idea}
                        className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2"
                      >
                        <span className="mt-0.5 h-2 w-2 flex-none rounded-full bg-emerald-300"></span>
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <footer className="text-xs text-slate-400">
                * البيانات تقديرية مبنية على تحليل اتجاهات السوق في 2024،
                ويجب إجراء دراسة جدوى تفصيلية قبل اتخاذ قرارات الشراء.
              </footer>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
